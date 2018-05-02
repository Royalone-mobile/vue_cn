<template>
    <div class="pages-content scroll">
        <div class="accounting-records-wrapper">
            <div class="search-bar-con">
                <form>
                    <div class="row">
                        <input class="date" type="date" value="2018-03-21">
                        <input class="date" type="date" value="2018-03-20">
                        <input class="acc-btn-1 submit" type="btn" value="查询">
                    </div>
                    <div class="row">
                        <select class="col-10">
                            <option value="">全部类型</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="data-table-con" id="app">
                        {{ message }}
                <table class="acc-table acc-table-1">
                    <thead>
                        <tr>
                            <th>时间</th>
                            <th>详情</th>
                            <th>支出</th>
                            <th>收入</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cash_info">
                            <td>
                                <p v-html="item.created_at">
                                </p>
                            </td>
                            <td class="acenter">
                                {{item.remark}}
                            </td>
                            <td class="acenter">
                                {{item.income}}
                            </td>
                            <td class="acenter"></td>
                        </tr>                     
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

    module.exports =  {
        components: {},
        data () {
            return {
                cash_info: null,
                message: 'Hello'
            }
        },
        mounted () {
            axios.get('json/cash_flow.json', "", {
                headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'crossDomain': true
                },
                responseType: 'json'
            }).then((response) => {
                this.cash_info = response['data']['data'];
            });
        }
    };

</script>