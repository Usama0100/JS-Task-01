var num1 = +prompt("Enter Value 1");
var num2 = +prompt("Enter value 2");
var add = num1 + num2;
var min = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

document.write(
  `<table border="1px">
      <tr>
        <th>Addition</th>
        <td>${add}</td>
      </tr>
<br>
      <tr>
        <th>Subtract</th>
        <td>${min}</td>
      </tr>

      <tr>
        <th>Multiply</th>
        <td>${mul}</td>
      </tr>

      <tr>
        <th>Divide</th>
        <td>${div}</td>
      </tr>

      <tr>
        <th>Modulus</th>
        <td>${mod}</td>
      </tr>
    </table>
`
);
