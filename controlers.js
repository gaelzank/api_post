// je déclare un controller que je nomme postController
app.controller('postController', function($scope){

// Stocker dans le controleur toutes les variables pour la saisie et l'affichage du post
  
	$scope.error ="";
	$scope.posts = [];
	$scope.post = {
		titre: "",
		description: ""
	};
  $scope.commentaires = [];
  $scope.com = {
    auteur: "",
    avis: ""
  };

// fonction pour afficher le post dont le titre est choisi
$scope.postSelectionne = null;
$scope.selectionPost = function(post){
    $scope.postSelectionne = post;
    $scope.commentaires = [];

  }
// fonction qui retire l'affichage du post choisi
$scope.reinitPost = function(post){
  $scope.postSelectionne = null;
}

// Ecrire une fonction permettant d'ajouter un post à la liste
$scope.ajouterPost = function(){
	if(!$scope.post.titre || $scope.post.titre === ''){
		$scope.error = "le titre doit etre renseigne";
	} else {
		var post = {uuid: $scope.genererUuid(), titre: $scope.post.titre, description: $scope.post.description};
		$scope.posts.push(post);
    $scope.post.titre ='';
    // $scope.post.description = '';
    tinyMCE.activeEditor.setContent('');
    
	}
}
$scope.ajoutCom = function(){
  var com = {uuid: $scope.genererUuid(), auteur: $scope.com.auteur, avis: $scope.com.avis};
    $scope.commentaires.push(com);
    $scope.com.auteur ='';
    // $scope.com.avis = '';
    tinyMCE.activeEditor.setContent('');
}
// Ecrire une fonction qui permet de générer un identifiant aléatoire
  $scope.genererUuid = function() {
      return Math.floor((Math.random() * 1000000) + 1);
    };

// Ecrire une fonction qui permet de supprimer un post de la liste
 $scope.supprimerPost = function(uuid) {
      for (var i = 0; i < $scope.posts.length ;i++) {
        if ($scope.posts[i].uuid === uuid) {
          $scope.posts.splice(i, 1);
          break;
        }
      }
    };
//     $scope.isVisible = false;
// $scope.commenterPost = function(){
//   $scope.isVisible = !$scope.isVisible;
// } 
 // tri

  $scope.champTri = null;
  $scope.triDescendant = false;
  $scope.triPosts = function(champ) {
    if ($scope.champTri == champ) {
      $scope.triDescendant = !$scope.triDescendant;
    } else {
      $scope.champTri = champ;
      $scope.triDescendant = false;
    } 
  }
  $scope.cssChevronsTri = function(champ) {
    return {
      glyphicon: $scope.champTri == champ,
      'glyphicon-chevron-up' : $scope.champTri == champ && !$scope.triDescendant,
      'glyphicon-chevron-down' : $scope.champTri == champ && $scope.triDescendant 
    };
  }

$scope.isVisible = false;
// $scope.ajout = function(){
//   $scope.isVisible = !$scope.isVisible;
// } 

$scope.ajouterUnPost = function(){
  $scope.isVisible = !$scope.isVisible;
} 

$scope.optionsTinyMce = {
    language: "fr_FR",
    statusbar: false,
    menubar: false
  };
});
