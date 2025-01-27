const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Key Code</th>
      <th scope="col">Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
</table>
        </div>
    `
})