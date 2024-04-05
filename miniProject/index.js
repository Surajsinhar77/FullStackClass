let addCard = document.getElementById('addCard');
let array = [];

    if(localStorage.getItem('cardData')){
        let a = JSON.parse(localStorage.getItem('cardData'));
        for(let i =0; i<a.length; i++){
            array.push(a[i]);
        }
    }

        function allList(data, index){
            console.log("data from all List", data);
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
                        <button class="updateBtn">Update</button>
                    </div>
                </div>
            `;

            cardpart.insertAdjacentHTML('afterbegin', cardForNote);

            let titleData = document.querySelector('.titleData');
            let textData = document.querySelector('.textData');

            titleData.value = data.titleName;
            textData.value = data.textData;
        }


        array.forEach((element, index)=>{
            allList(element, index);
        })


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