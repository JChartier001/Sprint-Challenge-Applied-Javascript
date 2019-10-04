// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(async (topics) => {
            //setting userResponse to get usernames.  "await" sets interval.
            const topicData = await axios.get(topics);
            console.log(topicData)
            topicCreator(topicData.data);
        });
    });

        function topicCreator(array) {
           const tab = document.createElement('div');

            tab.classList.add("tab");

            //tab.textContent = array.data;

            return tab;
            
            data.topics[""0""]
        };
        const topicTab = document.querySelector('.topics');
topicTab.appendChild(topicCreator());

console.log(topicTab);

