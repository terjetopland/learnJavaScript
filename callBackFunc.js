const  funcToTakeACallBackAsParam = (callBackFunc, callTheCallBack=false) => {
    if(callTheCallBack) {
        callBackFunc();
        return;
    }

    console.log(`You didn't call any callback function.`);
}

const callMe = () => {
    console.log(`Hurray!! You called me.`);
};

funcToTakeACallBackAsParam(callMe);
funcToTakeACallBackAsParam(callMe, true);