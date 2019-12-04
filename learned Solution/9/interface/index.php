<!DOCTYPE HTML>
<html>

<head>
    <style>
        .error {
            color: #FF0000;
        }

        button {
            background-color: #4CAF50;
            /* Green */
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            border-radius: 12px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>

<body>

    <div id='option'>
        <button id='Create'>Create</buttton>
            <button id='Retrieve'>Retrieve</buttton>
                <button id='Update'>Update </buttton>
                    <button id='Delete'>Delete </buttton>
    </div>
    <div id='content'></div>
    

    <script>
        function send(data) {
            $.ajax({
                url: 'interface.php',
                type: "post",
                data: data,
                success: function(response) {
                    // if(data['type'] =='retrieve' ){
                    //     information = JSON.stringify(response)
                    // }
                    console.log(response)
                    alert(response)
                    
                    


                }
            })
        }

        $('#Create').click(() => {
            let c = '<h2>Creat Account </h2>\
            first_name: <input type="text" id="first_name" value="shuang">\
            <br><br>\
            last_name: <input type="text" id="last_name" value="wu">\
            <br><br>\
            email: <input type="text" id="email" value="1@bu.edu">\
            <br><br>\
            phone: <input type="text" id="phone"value="12345678">\
            <br><br>\
            <input class="submit" type="submit" name="submit" value="Create Account">'
            $('#content').html(c)

            $('.submit').off('click').click(() => {
                let a = {
                    'first_name': $('#first_name').val(),
                    'last_name': $('#last_name').val(),
                    'email': $('#email').val(),
                    'phone': $('#phone').val(),
                    'type': 'create'
                }
                send(a)
            })
        })

        $('#Retrieve').click(() => {
            let c = '<h2> Input the email to retrieve your account</h2>\
            email: <input type="text" id="email" value="1@bu.edu">\
            <br><br>\
            <input class="submit" type="submit" name="submit" value="retrieve Account">'
            $('#content').html(c)
            $('.submit').off('click').click(() => {
                let a = {
                    'email': $('#email').val(),
                    'type': 'retrieve'
                }

                send(a)
            })
        })
        $('#Update').click(()=>{
            let c = '<h2>Updata Account </h2>\
            first_name: <input type="text" id="first_name" value="shuang">\
            <br><br>\
            last_name: <input type="text" id="last_name" value="wu">\
            <br><br>\
            email: <input type="text" id="email" value="1@bu.edu">\
            <br><br>\
            phone: <input type="text" id="phone"value="12345678">\
            <br><br>\
            <input class="submit" type="submit" name="submit" value="Update Account">'
            $('#content').html(c)

            $('.submit').off('click').click(() => {
                let a = {
                    'first_name': $('#first_name').val(),
                    'last_name': $('#last_name').val(),
                    'email': $('#email').val(),
                    'phone': $('#phone').val(),
                    'type': 'update'
                }
                console.log(a);
                send(a)
            })


        })

        $('#Delete').click(()=>{

            let c = '<h2> Input email to delete account</h2>\
            email: <input type="text" id="email" value="1@bu.edu">\
            <br><br>\
            <input class="submit" type="submit" name="submit" value="Delete Account">'
            $('#content').html(c)
            $('.submit').off('click').click(() => {
                let a = {
                    'email': $('#email').val(),
                    'type': 'delete'
                }

                send(a)
            })

        })
    </script>



</body>

</html>