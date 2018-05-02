<template>
    <div id="bet_info">
        <div class="pages-content scroll">
            <div class="person-report-wrapper">
                <div class="search-bar-con">
                    <form>
                        <div class="row">
                            <input class="date" type="date" v-model="start_date"/>
                            <input class="date" type="date" v-model="end_date"/>
                            <input class="acc-btn-1 submit" type="button" value="查询" v-on:click="filter()"/>
                        </div>
                        <div class="row">
                            <select class="col-10" v-model="cur_game_name">
                                 <option v-for="item in game_types" v-bind:value="item.name">{{item.name}}</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="data-table-con">
                    <table class="acc-table acc-table-1">
                        <thead>
                            <tr>
                                <th width="25%">时间</th>
                                <th width="25%">动作</th>
                                <th width="25%" class="aright">金额</th>
                                <th width="25%" class="aright">盈亏</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in bet_infos">
                                <td>
                                    <p v-html="item.created_at">
                                    </p>
                                </td>
                                <td class="acenter">
                                    {{item.game_name}}
                                </td>
                                <td class="aright">
                                    {{item.valid_bet_amount}}
                                </td>
                                <td class="aright">
                                    {{item.win_loss_amount}}
                                </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="fix-data-con">
            <table class="acc-table acc-table-2">
                <thead>
                    <th width="25%"></th>
                    <th width="25%" class="acenter">總計</th>
                    <th width="25%" class="aright">600</th>
                    <th width="25%" class="aright">-2458</th>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>

    module.exports =  {
        components: {},
        data() {
            return {
                bet_infos: null,
                game_types: null,
                cur_game_name: null,
                start_date: this.getDate(-30),
                end_date: this.getDate(0)
            }
        },
        methods: {
            getDate: function(add_day) {
                const toTwoDigits = num => num < 10 ? '0' + num : num;
                let today = new Date();
                today.setDate(today.getDate() + add_day);
                let year = today.getFullYear();
                let month = toTwoDigits(today.getMonth() + 1);
                let day = toTwoDigits(today.getDate());
                return `${year}-${month}-${day}`;
            },

            filter: function() {
                var bet_infos = [];
     
                for(i = 0; i < this.bet_infos.length ; i++)
                {
                    var date = this.bet_infos[i].created_at;
                    date = Date.parse(date.substring(0,10));
                    if((date >= Date.parse(this.start_date)) &&
                       (date <= Date.parse(this.end_date)  ) && 
                       (this.cur_game_name.localeCompare(this.bet_infos[i].game_name) == 0) ) {
                           bet_infos.push(this.bet_infos[i]);
                    }
                }
                this.bet_infos = bet_infos;
            }
        },
        mounted() {

            // get bet log data
            axios.get('json/bet_log.json', "", {
                headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'crossDomain': true
                },
                responseType: 'json'
            }).then((response) => {
                this.bet_infos = response['data']['data']['datas'];
            });

            // get game types
            axios.get('json/game_type.json', "", {
                headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'crossDomain': true
                },
                responseType: 'json'
            }).then((response) => {
                this.game_types = response['data'];
            });

        }
    };

</script>