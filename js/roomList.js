var roomBox = Vue.component("room-box", {
    props: ["roomList"],
    template: "#room-box",
  });

var vm = new Vue({
    el: "#main",
    data: {
      roomsHeader:"ROOMS",
      rooms:[],
      
    },
    components: {
        roomBox: roomBox
       },
    created(){
        axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
            headers:{
                authorization: "Bearer " + "TJuqfa4z35u3GSBwQmNPxem2FceIJ21SuuFH260t46KnYmIvJQ8v5qseeWz4",
                accept: "application/json",
            }
        }).then(function(res){
            console.log(vm.rooms)
            vm.rooms=res.data.items
            console.log(vm.rooms)
        })
        .catch(function(error){
            console.log('連線異常')
        })
    
    }
    
  });

  
  



