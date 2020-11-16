import Vue from 'vue';
//elemene组件引用
import {
    Pagination,       //1
    Dialog,           //1
    Autocomplete,     //1
    Menu,             //1
    Submenu,          //1
    MenuItem,         //1
    MenuItemGroup,    //1
    Input,            //1
    Radio, 
    RadioGroup,           //1
    Checkbox,         //1
    Select,           //1
    Option,           //1
    Button,           //1
    Table,            //1
    TableColumn,      //1
    DatePicker,       //1
    Popover,          //1
    Form,             //1
    FormItem,         //1
    Icon,             //1
    Row,              //1
    Col,              //1
    Upload,           //1
    Steps,            //1
    Step,             //1
    Collapse,         //1
    CollapseItem,     //1
    Container,        //1
    Header,           //1
    Aside,            //1
    Main,             //1
    Footer,           //1
    Loading,          //1
    Message,          //1
    MessageBox,
    Tooltip,
    Cascader,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tag,
    Alert
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Tooltip);
Vue.use(RadioGroup);
Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Alert);

Vue.use(Tag);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$Message = Message;