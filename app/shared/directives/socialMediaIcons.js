angular.module('app').directive('socialMediaIcons', function (){
  return {
    restrict : 'E',
    template: '<ul class="social-media-list no-padding"> <li><a href="#" title="facebook"><img src="assets/img/facebook_icon.jpg" alt="facebook icon"></a></li> <li><a href="#" title="googleplus"><img src="assets/img/googleplus_icon.jpg" alt="googleplus icon"></a></li> <li><a href="#" title="instagram"><img src="assets/img/instagram_icon.jpg" alt="instagram icon"></a></li> <li><a href="#" title="linkedin"><img src="assets/img/linkedin_icon.jpg" alt="linkedin icon"></a></li> <li><a href="#" title="pinterest"><img src="assets/img/pinterest_icon.jpg" alt="pinterest icon"></a></li> <li><a href="#" title="twitter"><img src="assets/img/twitter_icon.jpg" alt="twitter icon"></a></li> </ul>'};
});