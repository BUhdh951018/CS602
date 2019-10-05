const express = require("express");
const router = express.Router();

//DOES: setup session for passwords
router.all("*", (req, res, next) => {
	//retrieve or store [] in session passwords
	let passwords = req.session.passwords || [];
	req.session.passwords = passwords;

	next();
});

//DOES: gets all passwords
router.get("/", (req, res) => {
	res.json(req.session.passwords);
});

//DOES: gets password by username
router.get("/:username", (req, res) => {
	//check for existing guitar in session
	let password = _checkExisting(req);

	if (password) {
		res.json(password);
	} else {
		res.send("Password entry not Found");
	}
});

//DOES: posts new password  with Date as ID
router.post("/", (req, res) => {
	let { username, password } = req.body;

	//check for existing username
	let existing = req.session.passwords.find(entry => {
		return entry.username == username;
	});

	//push to passwords if new entry
	if (existing) {
		res.send("Username exists, you may update password.");
	} else {
		const entry = {
			date: new Date(),
			username: username,
			password: password,
			previous: null
		};

		req.session.passwords.push(entry);
		res.json(req.session.passwords);
	}
});

//DOES: updates password by username
router.put("/:username", (req, res) => {
	//check for existing guitar in session
	let password = _checkExisting(req);

	if (password) {
		//update password
		password.username = password.username;
		password.previous = password.password;
		password.password = req.body.password;

		//send whole array
		res.json(req.session.passwords);
	} else {
		res.send("Password entry not Found");
	}
});

//DOES: delete password by username
router.delete("/:username", (req, res) => {
	//check for existing password entry
	let password = _checkExisting(req);

	if (password) {
		//filter out entry
		req.session.passwords = req.session.passwords.filter(
			entry => entry.username != req.params.username
		);

		res.json(req.session.passwords);
	} else {
		res.send("Password entry not Found");
	}
});

//DOES: delete all passwords
router.delete("/", (req, res) => {
	req.session.passwords = [];
	res.json(req.session.passwords);
});

function _checkExisting(req) {
	let password = req.session.passwords.find(entry => {
		return entry.username == req.params.username;
	});

	return password;
}

module.exports = router;
