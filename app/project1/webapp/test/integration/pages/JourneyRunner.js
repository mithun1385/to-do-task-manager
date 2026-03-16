sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/todotaskList",
	"project1/test/integration/pages/todotaskObjectPage"
], function (JourneyRunner, todotaskList, todotaskObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onThetodotaskList: todotaskList,
			onThetodotaskObjectPage: todotaskObjectPage
        },
        async: true
    });

    return runner;
});

