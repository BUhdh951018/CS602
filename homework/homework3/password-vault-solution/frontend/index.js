$(document).ready(() => {
	//fetch passwords
	getPasswords();

	//hide form and titles
	$("#formSection").css("display", "none");

	//store state
	$add = false;
	$post = false;
});

//--------------------------------- Handlers ---------------------------------//
//DOES: handler for add btn
$("button[name='add']").on("click", () => {
	$add = true;
	$("#formSection").css("display", "block");
});

//DOES: handler for submit btn
$("button[name='submit']").on("click", function() {
	let password = {};

	$.each($("#passwordForm").serializeArray(), (i, input) => {
		password[input.name] = input.value;
	});

	if ($add) {
		addPassword(password);
	} else {
		updatePassword(password);
	}
});

//DOES: handler for delete btn in table
$("#passwordsTable").on("click", "button[name='delete']", function() {
	//get table row
	let $tr = $(this).parents("tr");
	//get id (username)
	let $username = $tr.attr("id");
	//remove table row
	$tr.remove();

	//delete password
	deletePassword($username);
});

//DOES: handler for update btn in table
$("#passwordsTable").on("click", "button[name='update']", function() {
	$update = true;

	//get table row
	let $tr = $(this).parents("tr");
	//get id (username)
	let $username = $tr.attr("id");
	//show update form
	$("#formSection").css("display", "block");
	$("#username").val($username);
});

//--------------------------------- API ---------------------------------//
function getPasswords() {
	//fetch passwords
	const getRequest = new Request("http://localhost:3000/passwords", {
		method: "GET",
		mode: "cors",
		redirect: "follow",
		credentials: "include",
		headers: new Headers({ "Content-Type": "text/plain" })
	});

	fetch(getRequest)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);

			//clear table body
			if (data.length) {
				$("#passwordsTable tbody").empty();
			}

			//add password entries to table
			$(function() {
				$.each(data, (i, item) => {
					let $tr = $("<tr>").append(
						$("<td>").text(item.date),
						$("<td>").text(item.username),
						$("<td>").text(item.password),
						$("<td>").text(item.previous),
						$("<td>").html(
							"<button name='delete' type='button' class='btn btn-sm btn-danger float-right'>delete</button><button name='update' type='button' class='btn btn-sm btn-warning float-right mr-3'>update</button>"
						)
					);

					$tr.attr("id", item.username);
					$("#passwordsTable").append($tr);
				});
			});
		})
		.catch(errors => {
			console.log(`Could not fetch previous password entries: ${errors}`);
		});
}

function addPassword(password) {
	const postRequest = new Request("http://localhost:3000/passwords", {
		method: "POST",
		mode: "cors",
		credentials: "include",
		redirect: "follow",
		headers: new Headers({ "Content-Type": "application/json" }),
		body: JSON.stringify(password)
	});

	fetch(postRequest)
		.then(response => {
			return response.json();
		})
		.then(data => {
			getPasswords();

			$("#username").val(" ");
			$("#password").val(" ");
			$("#formSection").css("display", "none");
			$add = false;
		})
		.catch(errors => {
			console.log(`Could not post new entry: ${errors}`);
		});
}

function updatePassword(password) {
	const putRequest = new Request(
		`http://localhost:3000/passwords/${password.username}`,
		{
			method: "PUT",
			mode: "cors",
			credentials: "include",
			redirect: "follow",
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify(password)
		}
	);

	fetch(putRequest)
		.then(response => {
			return response.json();
		})
		.then(data => {
			getPasswords();

			$("#username").val(" ");
			$("#password").val(" ");
			$("#formSection").css("display", "none");
			$update = false;
		})
		.catch(errors => {
			console.log(`Could not post new entry: ${errors}`);
		});
}

function deletePassword(username) {
	const deleteRequest = new Request(
		`http://localhost:3000/passwords/${username}`,
		{
			method: "DELETE",
			mode: "cors",
			credentials: "include",
			redirect: "follow",
			headers: new Headers({ "Content-Type": "application/json" })
		}
	);

	fetch(deleteRequest)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
		})
		.catch(errors => {
			console.log(`Could not delete entry: ${errors}`);
		});
}
