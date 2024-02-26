// 這個檔案的功能是"程式的進入點"

// 首先先載入createApp函式
import { createApp } from "vue";

// 載入根組件(app.vue這支檔案)
import App from "./App.vue";

//建立Vue App物件
const app = createApp(App);

//掛載到html標籤底下(選擇html標籤裡的id,掛載到這個div上)
app.mount("#app");
