// Selecting the element with id 'insert'
const insert = document.getElementById('insert');

// Adding a keydown event listener to the window
window.addEventListener('keydown', (e) => {
  // Updating the innerHTML of the 'insert' element with a table displaying key-related information
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th> 
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td> 
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
