import Els from '../Els';
import Vue from 'vue';
class ElsWord extends Els{
    constructor() {
        super();
        this.startTimeRange = this.getFormatDate(new Date(),1);
        this.endTimeRange = this.getFormatDate(new Date());
        this.copyTableTitle = [];
        this.copyTableData = [];
        this.dataThemeClass = {};
        this.dataThemeZnodes = [];
        this.dimThemeClass = {};
        this.dimThemeZnodes = [];
        this.myCollectClass = {};
        this.myCollectZnodes = [];
        this.jointIcon = {};
        this.jointSave = {};
        this.searchSave = {};
        this.countSave = {};
        this.tableAllData = {
            table_name: {},
            table_isShow: {},
            table_id: {},
            table_indexType: {},
            table_num: []
        };
    }
}
export default ElsWord;