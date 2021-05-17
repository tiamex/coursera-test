<!DOCTYPE html>

<html>
    <head>
        <title>Form</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/stylesheet.css" rel="stylesheet" type="text/css" />
    
        <script type="text/javascript"> 
            function stopRKey(evt) { 
              var evt = (evt) ? evt : ((event) ? event : null); 
              var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
              if ((evt.keyCode === 13) && (node.type=== "text"))  {return false;} 
            } 
            document.onkeypress = stopRKey; 
        </script>
    </head>
    
    <body>
        <div class="form">	
            <form action="email.php" method="POST">
		<fieldset>
			<legend>Contact Form</legend>
		<br>
                <table class="form_table">

		<tr>	
                    <th align="right">Store Name</th>
                    <td><input type="text" name="store_name" maxlength="100" style="width:75%" placeholder="Type Here" required></td>
		</tr>
		<tr>
                    <th align="right">License#</th>
                    <td><input type="text" name="license" maxlength="6" style="width:75%" placeholder="6 Digits" required></td>
		</tr>
                <tr>
                    <th align="right">Date</th>
                    <td><input type="date" name="date" style="width:75%" required></td>
		</tr>        
		<tr>
                    <th align="right">Email</th>
                    <td><input type="email" name="email" style="width:75%" placeholder="email@domain.com" required></td>
		</tr>
                <tr>
                    <th align="right">App</th>
                    <td><select style="width:75%" name="app" required>
                            <option value ="N/A">- Select App Name -</option>
                            <option value ="App1">App1</option>
                            <option value ="App2">App2</option>
                            <option value ="App3">App3</option>
                            <option value ="App4">App4</option>                          
                            <option value ="App5">App5</option>      
                    </td>
                </tr>
		<tr>
                    <th align="right">Message</th>
                    <td><textarea  name="message" style="width:75%" rows=8 cols=50 maxlength="3000" placeholder="Enter Message or Question Here..." required></textarea></td>
                </tr>

                <tr>
                    <td></td>
                    <td><input type="submit" name="submit" value="Submit"> <input type="reset" value="Clear"></td>
                </tr>
            </table>
            </fieldset>
            </form>
        </div>
    </body>
</html>
