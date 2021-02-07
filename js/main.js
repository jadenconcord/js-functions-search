var popup = new Prompter({
  closeIcon: true
});
var boxes = new Template('#results', false);

document.querySelector('#home-search input').focus();

boxes.update({
  title: "Common Solutions",
  boxes: getCommonFunctions(),
});


function submitFunc() {
  popup.show(getTemplate('submit-func-template'));
}


function search(term, el) {
  if (el.id == "home-input") {
    document.querySelector('#home-search').style.display = "none";
    document.querySelector('#header-search').value = term;
    document.querySelector('#header-search').style.display = "inline";
  }
  document.getElementById('results').innerText = "loading...";

  boxes.update({
    title: "Search results for \"" + term + "\"",
    boxes: searchDatabase(term),
  })
}

function searchQuery(query) {
  let el = document.querySelector(query);
  let term = el.value;
  search(term, el);
}

function searchKey(el, event) {
  if (event.keyCode == 13) {
    search(el.value, el);
  }
}



let searchDatabase = getCommonFunctions;

function getCommonFunctions() {
  return [{
    name: "Search Functions",
    description: "Search for functions function",
    code: `function search(term, el) {
  if (el.id == "home-input") {
    document.querySelector('#home-search').style.display = "none";
    document.querySelector('#header-search').value = term;
    document.querySelector('#header-search').style.display = "inline";
  }
  document.getElementById('results').innerText = "loading...";
}`,
  }, {
    name: "Submit Func",
    description: "show the submit function popup",
    code: `function submitFunc() {
  popup.show(getTemplate('submit-func-template'));
}`,
  }, {
    name: "Random Number Range",
    description: "Generate random intergers",
    code: `function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}`,
  }, {
    name: "Render Template Function",
    description: "Render templates to HTML",
    code: `function RenderTemplate(template, local){
  let result = DecodeHTML(template);
  result = EncodeBraces(template);
  result = AutoEndBlocks(result);
  result = FormatTemplateVariables(result);
  result = ReplaceTemplateBlocks(result);
  result = UnEncode(result);
  return EvalTemplate('let result = '+result+'; return result;', local);
}`,
  }];
}
