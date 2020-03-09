var myRootDiv = document.getElementById("child");


for (var i = 0; i < 50; i++) {

    var firstVariable = 'background-color:red; position:relative; border-radius: 0vw; height:10vw; left:40vw;top:150vw;';
    var secondVariable = 'background-color:blue; position:relative; height:10vw; margin:5vw;left:14vw;';
    var thirdVariable = 'background-color:yellow; position:relative; border-radius: 50vw; left:-20vw;';

    var fourthVariable = 'background-color:red; position:relative; border-radius: 0vw; height:10vw; left:-50vw;top:-10vw;';
    var fifthVariable = 'background-color:blue; position:relative; height:3vw; margin:5vw;left:-50vw;top:0vw;';
    var sixthVariable = 'background-color:yellow; height:2vw;top:-100vw; width:3vw; margin:4vw; left:-40vw;';


    var seventhVariable = 'background-color:red; position:relative; border-radius: 0vw; width:5vw; height:3vw;left:30vw;top:0vw;';
    var eighthVariable = 'background-color:blue; position:relative; height:10vw; margin:5vw;left:40vw; top:-10;';
 
    var myModule = `

        <div class="child3" style="${ firstVariable }">
            <div class="child2" style="${ secondVariable }"></div>
            <div class="child4" style="${ thirdVariable }"></div>
             <div class="child" style="${ fourthVariable }"></div>
            <div class="child5" style="${ fifthVariable }"></div>
             <div class="child6" style="${ sixthVariable }"></div>
            <div class="child7" style="${ seventhVariable }"></div>
             <div class="child8" style="${ eighthVariable }"></div>
        </div>

    `;



    myRootDiv.insertAdjacentHTML('beforeend', myModule)


}