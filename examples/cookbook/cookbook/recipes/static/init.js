$(function() {
  // NOTE: Template literals not supported in all browsers. Use with caution
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Browser_compatibility
  var query = `
  query {
    allRecipes {
      edges {
        node {
          id,
          title,
          instructions,
          amounts {
            edges {
              node {
                id,
                unit,
                amount,
                ingredient{
                  id,
                  name,
                }
              }
            }
          }
        }
      }
    }
  }`;

  $.get(
    "/graphql",
    { query: query },
    function(data) {
      var element = document.createElement("recipe-list");
      document.body.appendChild(element);
      riot.mount("recipe-list",data);
    }
  )
});
