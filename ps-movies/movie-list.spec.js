// npm install karma jasmine-core -g
// karma start
describe("The movieList component", function() {

    beforeEach(module("psMovies"));

    var moviesList;
    // before each test, going to invoke a function where we inject a service $componentController
    // all we're doing is seeing if we can get to that movieList controller
    beforeEach(inject(function($componentController) {

        // specify name of component which is "movieList"
        // then we can specify locals to pass in as dependencies
        moviesList = $componentController("movieList", {
            // componentController needs a scope object to be passed in
            $scope: {}
        });
    }));

    it("can be created", function() {
        expect(moviesList).toBeDefined();
    });

});