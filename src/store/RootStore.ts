import DeviceStore from "./DeviceStore";
import UserStore from "./UserStore";

export default class RootStore {
    UserStore: UserStore;
    DeviceStore: DeviceStore;

    constructor() {
        this.UserStore = new UserStore();
        this.DeviceStore = new DeviceStore();
    }
}
