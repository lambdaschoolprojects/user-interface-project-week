const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

class Tab {
    constructor(tab) {
        this.tab = tab;

        this.tabData = this.tab.dataset.tab;

        cards.forEach(card => {
                if (card.dataset.tab == this.tabData)
                    this.tabContent = card;
            }
        )

        this.tab.addEventListener("click", e => this.selectTab());
        console.log("test");
    }
    selectTab() {
        tabs.forEach(tab => tab.classList.remove("active-tab"));
        this.tab.classList.add("active-tab");

        cards.forEach(card => card.classList.remove("active-card"));
        this.tabContent.classList.add("active-card");

        //console.log("click");
    }
}

tabs.forEach(tab => new Tab(tab));
