let app = new Vue({
    el: "#vueApp",
    data: {
        title: "Activities List",
        activities: [],
        newActivity: "",
    },
    methods: {
        addActivity(){
            
            if(this.newActivity == null || this.newActivity == ""){
                return;
            }
            
            this.activities.push({text: this.newActivity, status: false});
            this.newActivity = "";
            this.saveActivities();
        },
        finishActivity(activity){
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
    },

});
