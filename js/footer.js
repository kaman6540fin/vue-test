const vm = Vue.createApp({
    data(){
        return {
            msg:'hello!',
            logoImg:"image/logo-white.svg",
            sitePhone: "07-536-0000",
            siteAddress: "香港銅鑼灣興發街1號",
            siteIg: "I_dont_wank_to_work",
            siteTitle:"不想上班"
        }
    },

});

vm.component('footer-component',{
    props:['logoImg','sitePhone','siteAddress','siteIg','siteTitle'],
    template:
    `<footer>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 d-flex justify-content-end">
              <div class="footer-logo d-flex flex-column justify-content-between">
                <img :src="logoImg" alt="" />
                <p>{{siteTitle}}</p>
              </div>
              <div class="footer-info">
                <div class="phone d-flex">
                  <div><i class="fas fa-phone-alt"></i></div>
                  <p>{{sitePhone}}</p>
                </div>
                <div class="adderss d-flex">
                  <div><i class="fas fa-map-marker-alt"></i></div>
                  <p>{{siteAddress}}</p>
                </div>
                <div class="ig d-flex">
                  <div><i class="fab fa-instagram"></i></div>
                  <p>{{siteIg}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `
});

vm.mount('#app');