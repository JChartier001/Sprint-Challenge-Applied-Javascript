// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryPoint2 = document.querySelector(".topics")

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data.topics);
        response.data.topics.forEach(async (topics) => {  
            topicCreator(response);
            entryPoint2.appendChild(topicCreator(response));
            
        });
    });

        function topicCreator(object, i) {
           const tab = document.createElement('div');

            tab.classList.add("tab");

            // tab.textContent = ;

            return tab;
            
           
        };

        const topicTab = document.querySelector('.topics');
topicTab.appendChild(topicCreator());



