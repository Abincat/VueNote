// 這個檔案的功能是"程式的進入點"

// 首先先載入createApp函式
import { createApp } from "vue";

// 載入根組件(app.vue這支檔案)
import App from "./App.vue";

//換頁用的router也是要import在這邊
//把他導到router的檔案去(這邊導到設定檔)
import router from "./router/index";

//建立Vue App物件
const app = createApp(App);

//要在mount上面
app.use(router);

//掛載到html標籤底下(選擇html標籤裡的id,掛載到這個div上)
app.mount("#app");
