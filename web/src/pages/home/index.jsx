import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";

import { VictoryBar, VictoryChart } from "victory";
import SidebarMenu from "../../components/sidebarMenu";

import React, { Component } from "react";

export default class Home extends Component {
  render() {
    const data = [
      { quarter: 1, earnings: 1300 },
      { quarter: 2, earnings: 16500 },
      {quarter:2.5, earnings:8500},
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ];
    return (
      <div className="flex flex-row">
        <SidebarMenu />

        <div className="">
          <VictoryChart>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </div>
      </div>
    );
  }
}
