let id = 0;

let app = new Vue({
    el: "#vueApp",
    data: {
        title: "Activities List",
        activities: [],
        newActivity: "",
        name:"",
    },
    methods: {
        addActivity(){
            
            if(this.newActivity == null){
                return;
            }
            
            this.activities.push({id: id++, text: this.newActivity, status: false});
            this.newActivity = "";
            this.saveActivities();
        },
        finishActivity(activity){
            console.log(activity.status)
            activity.status = !activity.status;
            this.saveActivities();
        },
        deleteActivity(activity){
            this.activities = this.activities.filter((a) => a !== activity);
            this.saveActivities();
        },
        saveActivities() {
            const parsed = JSON.stringify(this.activities);
            localStorage.setItem("activities", parsed);
        },
    },
    mounted() {
        if(localStorage.getItem('activities')){
            try {
                this.activities = JSON.parse(localStorage.getItem("activities"));
            } catch(e) {
                localStorage.removeItem('activities');
            }
        }
        console.log(this.activities);
    },

});
