import React from "react";
import { SeverityLevel } from "@microsoft/applicationinsights-web";

export default class AppInsightsErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        console.log("eror output");
        this.setState({ hasError: true });
        //this.props.appInsights.trackException({
        //    error: error,
        //    exception: error,
        //    severityLevel: SeverityLevel.Error,
        //    properties: { ...info }
        //});
    }

    render() {
        if (this.state.hasError) {
            const { onError } = this.props;
            return typeof onError === "function"
                ? onError()
                : React.createElement(onError);
        }

        return this.props.children;
    }
}