var callBackGetSuccess = function(data){
    console.log("donnée api", data)
    alert("test " + data.parameters.format)
}
var url="https://data.iledefrance.fr/api/records/1.0/search/?dataset=prix-des-carburants-j-7&q=&facet=cp&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand&refine.city=ARGENTEUIL"
$.get(url, callBackGetSuccess).done(function(){

})
.fail(function(){
    alert("error");
})
.always(function(){

});