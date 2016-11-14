<recipe-list>
  <div each={ opts.data.allRecipes.edges }>
    <h2>{ node.title }</h2>
    <ul>
      <li each={ node.amounts.edges }>
        { node.amount } { node.unit.toLowerCase() } { node.ingredient.name }
      </li>
    </ul>
    <p>{ node.instructions }</p>
  </div>

  this.on("mount",function() {console.log(1)})

</recipe-list>
