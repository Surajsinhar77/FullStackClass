let addCard = document.getElementById('addCard');
let  array = []  

    if(localStorage.getItem('cardData')){
        let a = JSON.parse(localStorage.getItem('cardData'));
        console.log(a);
        array.push(a);
        console.log("localStorage ", array);
    }else{
        array = []
    } 

console.log(array);


        function addTheCard() {
            const cardpart = document.getElementById("cardpart");

            let cardForNote = `
                <div class="card">
                    <div class="content">
                        <div>
                            <label for="forTitle">Title</label>
                            <input class="titleData" type="text">

                        </div>
                        <div class="textmsg">
                            <label for="forText">Text</label>
                            <textarea class="textData textmessage"> </textarea>
                        </div>
                    
                    </div>
                    <div class="btnArea">
                        <button class="deleteBtn">Delete</button>
                        <button class="saveBtn">Save</button>
                    </div>
                </div>
            `;

            cardpart.insertAdjacentHTML('afterbegin', cardForNote);
            
            let deleteBtn = document.querySelector('.deleteBtn');
            let saveBtn = document.querySelector('.saveBtn');

            deleteBtn.addEventListener('click', deleteCard);
            saveBtn.addEventListener('click', saveDataFunction);
        }

        addCard.addEventListener('click', addTheCard);

        async function saveDataFunction(){
            console.log("Saving data...");

            let card = this.closest('.card');
            let titleData = card.querySelector('.titleData').value;
            let textData = card.querySelector('.textData').value;
            let obj = {
                "titleName": titleData,
                "textData": textData
            };

            array.push(obj);
            localStorage.setItem("cardData", JSON.stringify(array));
             
        }

        function deleteCard(){
            console.log("Deleting card...");
            let card = this.closest('.card');
            card.remove();
        }