<script>
    import {getQueryString} from "../../utils/getUrlParam";
    import {putLocalStorage,getLocalStorage} from "../../utils/localStorage";
    let store_no = "";
    // if (getLocalStorage('store_no') == '') {
    //     store_no = getQueryString('store_no');
    //     putLocalStorage('store_no', store_no);
    // } else {
    //     let newStore_no = getQueryString('store_no');
    //     if (newStore_no) {
    //         store_no = newStore_no;
    //         putLocalStorage('store_no', newStore_no);
    //     } else {
    //         store_no = getLocalStorage('store_no');
    //     }
    // }
    export default {
        store_no,
    }
</script>