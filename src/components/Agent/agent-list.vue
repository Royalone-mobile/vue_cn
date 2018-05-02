<template>
    <div class="pages-content">
        <div class="layer-member-report-wrapper">
            <div class="tab-box">
                <a class="tab-btn active">
                    <span>下线</span>
                </a>
                <a class="tab-btn">
                    <span>代理</span>
                </a>
            </div>
            <div class="sub-con-main">
                <div class="search-bar-con">
                    <form>
                        <div class="row">
                            <input class="date" type="date" value="2018-03-21"/>
                            <input class="date" type="date" value="2018-03-20"/>
                            <input class="acc-btn-1 submit" type="btn" value="查询"/>
                        </div>
                        <div class="row">
                            <select class="col-10">
                                <option value="">全部类型</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="data-con">
                    <h1>下线 报表查询</h1>
                    <div class="member-box-con">
                        <div class="list-title-con">
                            <p>用户名 aaa888168</p>
                            <a class="btn-more">查看</a>
                        </div>
                        <table class="acc-table acc-table-1">
                            <thead>
                                <tr>
                                    <th class="aleft">日期</th>
                                    <th class="acenter">類型</th>
                                    <th class="aright">盈虧</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in agent_info">
                                    <td>
                                        <p v-html="item.created_at">
                                        </p>
                                    </td>
                                    <td class="acenter">
                                        {{item.game_name}}
                                    </td>
                                    <td class="aright">
                                        <p class="txt-green">{{item.win_loss_amount}}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="member-box-con">
                        <div class="list-title-con">
                            <p>用户名 aaa888168</p>
                            <a class="btn-more">查看</a>
                        </div>
                        <table class="acc-table acc-table-1">
                            <thead>
                                <tr>
                                    <th class="aleft">日期</th>
                                    <th class="acenter">類型</th>
                                    <th class="aright">盈虧</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in agent_info">
                                    <td>
                                        <p v-html="item.created_at">
                                        </p>
                                    </td>
                                    <td class="acenter">
                                        {{item.game_name}}
                                    </td>
                                    <td class="aright">
                                        <p class="txt-green">{{item.win_loss_amount}}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports =  {
        components: {},
        data () {
            return {
                agent_info: null,
            }
        },
        mounted () {
            axios.get('json/agent.json', "", {
                headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'crossDomain': true
                },
                responseType: 'json'
            }).then((response) => {
                info = response['data']['data'];

                agento_data = [];

                for(i = 0; i < info.length ; i++)
                {
                    for(j = 0 ; j < info[i].data.length; j++)
                        agento_data.push(info[i].data[j]);
                }   

                this.agent_info = agento_data;

            });
        }
    };
</script>