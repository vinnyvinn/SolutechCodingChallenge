<template>
    <div>
        <section class="content">
            <!-- Default box -->
            <div class="box">
                <div class="box-body">
                    <v-app id="inspire">
                        <v-card>
                            <v-card-title>
                                Orders
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-spacer/>
                                <div
                                    class="form-group"
                                    style="margin-right: 10px"
                                >
                                    <label>Start Date</label>
                                    <date-picker
                                        v-model="start"
                                        required
                                        format="yyyy-MM-dd"
                                        input-class="form-control bg-white"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>End Date</label>
                                    <date-picker
                                        v-model="end"
                                        required
                                        format="yyyy-MM-dd"
                                        input-class="form-control bg-white"
                                    />
                                </div>
                                <v-spacer></v-spacer>

                                <div class="form-group mtp-15">
                                    <download-excel
                                        :data="reports"
                                        :title="'Orders'"
                                        v-if="reports.length"
                                        name="orders.xls"
                                        class="btn btn-primary pull-right export-btn"
                                    >
                                        <i class="fa fa-file-excel-o"></i> Export Excel
                                    </download-excel>
                                </div>
                            </v-card-title>
                            <v-data-table
                                :headers="headers"
                                :items="tableData"
                                :search="search"
                                item-key="name"
                                class="elevation-1"
                                :footer-props="{
                              showFirstLastPage: true,
                              firstIcon: 'mdi-arrow-collapse-left',
                              lastIcon: 'mdi-arrow-collapse-right',
                              prevIcon: 'mdi-minus',
                              nextIcon: 'mdi-plus'
                              }"
                            >
                            </v-data-table>
                        </v-card>
                    </v-app>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import DatePicker from "vuejs-datepicker";
import FieldDefs from "./FieldDefs";

export default {
    components:{
        DatePicker
    },
    data(){
        return {
            search:'',
            headers: FieldDefs,
            start:'',
            end:''
        }
    },
    watch:{
        period() {
            if (this.start && this.end) {
                this.$store.dispatch('setOrdersReport',{from:this.start,to:this.end});
            }
        },
    },
    created(){
        this.$store.dispatch("fetchOrders");
    },
    computed:{
        ...mapGetters({
            tableData:'getOrders',
            reports:'getOrdersReportFormatted'
        }),
        period() {
            return [this.start, this.end].join();
        },
    },
}
</script>
