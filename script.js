async function getJSONData() {
  let data;
  try{
	  //await the response of the fetch call
	  const response = await fetch("data.json");
	  //proceed once the first promise is resolved.
	  data = await response.json();
	  //proceed only when the second promise is resolved
  } catch(error) {
	console.error(error);
	$('#content').empty();
	$('#content').html('<div class="loadMessage"><h3>Page failed to load</h3></div>');
  }
  return data;
}


//call getJSONData function
getJSONData()
  .then(data => data.sales)
  .then(products => {
    $("#content").html(
      '<div class="loadMessage"><h3>It\'s loading...</h3></div>'
	);
    let getProducts = [];
    for (i = 0; i < products.length; i++) {
		getProducts.push(new productobj(products[i], i));
    }
    return getProducts;
  })
  .then((getProducts) => {
    for (i = 0; i < getProducts.length; i++) {
		getProducts[i].updatehtml();
    }
    return getProducts;
  })
  .then(products => {
	console.log("wait for 4 seconds . . . . ");
	//return products
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("4 seconds timer expired!!!");
        resolve(products);
      }, 4000);
    });
  })
  .then(function(arr) {
    let thishtml = "";
    for (let i = 0; i < arr.length; i++) {
      if (i % 3 == 0) {
        thishtml += "<div class='row justify-content-md-center'>";
        console.log("START");
      }
      thishtml += arr[i].htmlview;
      if (i % 3 == 2 || i == arr.length - 1) {
        thishtml += "</div>";
        console.log("FINISH");
      }
    }
    return thishtml;
  })
  .then(function(getHTML) {
    $("#content").empty();
    $("#content").append(getHTML);
	removeProduct();
	hoverOver();

	//Accessibility Use: User removes by using tab and key enter to navigate the page
	$("button").keypress(function(e) {
		var key = e.which;
		if(key == 13){
		  handleRemove(parseInt(e.target.parentElement.id));
		  return false;  
		 }
	});
  });

String.prototype.fixHTML = function() {
  let divContent = document.createElement("div");
  divContent.innerHTML = this;
  return divContent.innerHTML;
};

function truncate(sentence) {
  let cutOff = sentence.substr(0, 200);
  let newSentence = cutOff.fixHTML();

  if (newSentence % 2 == 0) {
    return newSentence + "<span>...</span>";
  } else {
    return newSentence + "<span>...</span>";
  }
}

function productobj(product, i) {
  let self = this;
  self.photo = product.photos.medium_half;
  self.title = product.name;
  self.tagline = product.tagline;
  self.url = product.url;
  self.htmlview = "";
  self.index = i;
  self.custom_class = "col-xs-9 col-sm-5 col-md-3 col" + ((i % 3) + 1);
  self.description = truncate(product.description);

  self.updatehtml = function() {
    $.get("product-template.html", function(template) {
      self.htmlview = template
		.replace("{image}", self.photo)
		.replace("{name}", self.title)
        .replace("{title}", self.title)
        .replace("{tagline}", self.tagline)
        .replace("{url}", self.url)
        .replace("{custom_class}", self.custom_class)
        .replace("{id}", self.index)
        .replace("{spanId}", self.index)
        .replace("{description}", self.description);
    });
  };
}

removeProduct = function() {
	$(".glyphicon-remove").click(function(e) {
		let index = e.target.id;
		handleRemove(index);
  });
};

/*
	handleRemove: Once it knows its index, it will modify the list of class product-container elements
	And shift accordingly to their positions
	Use jQuery fadeOut to animates the opacity of the remove product 
*/
function handleRemove(index){
    for (let i = 0; i < $(".product-container").length; i++) {
      if (
        parseInt($(".product-container")[i].id) >= index &&
        parseInt($(".product-container")[i].id) <
          ($(".product-container").length - 3)
      ) {
        let shiftRight = $(".product-container")[i + 3].id;
        let shiftTop = $(".product-container")[i + 2].id;
        let moveRight = $("div#" + parseInt(shiftRight) + ".product-container").detach();
        moveRight.insertAfter($("div#" + parseInt(shiftTop) + ".product-container"));
      }
	}
    $("#" + index).fadeOut(300, function() {
      $("#" + index).remove();
    });
}

/*
	Mouseover a product, an overlay comes across it with the description
	Listen to mouse movement on one of the class 'productImg' elements 
	and then find the closest class 'overlay' element to toggle
*/
function hoverOver() {
  $(".productImg")
    .mouseover(function() {
      $(this)
        .find(".overlay")
        .show();
    })
    .mouseout(function() {
      $(this)
        .find(".overlay")
        .hide();
    });
}
