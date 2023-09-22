import React, { useState } from "react";
import { DashboardBanner } from "../../Components/DashboardBanner/DashboardBanner";
import "./DashboardMain.css";
import DropdownListButton from "../../Components/Button/DropdownListButton";
import ChartDisplayGrid from "../../Components/ChartDisplayGrid";
import { useWidget } from "../../Hooks/useWidgets";

export function DashboardMain() {
    const { widgets, addWidget, removeWidget } = useWidget();

    return (
        <div className="dashboard-main">
            <DashboardBanner />
            <div className="page-layout-grid">
                <div className="chart-selection-column">
                    <DropdownListButton onAddWidget={addWidget}  />
                </div>
                <div className="display-charts-column">
                    {widgets.length ? 
                        (<ChartDisplayGrid widgets={widgets} removeWidget={removeWidget}  />):
                        (<div className="info-msg">There are no charts yet</div>)
                    }
                </div>
            </div>

        </div>
    )
}
