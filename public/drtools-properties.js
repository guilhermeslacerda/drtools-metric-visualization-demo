// Project: DR Tools Metric
/*var optionsProject = {
    "projectName" : "DR Tools Metric",
    "datasetDir": "./datasets/DrToolsMetric/",
    "datasetSummary" : "./datasets/DrToolsMetric/drtools-metric-summary.csv",
    "datasetNamespaceCoupling" : "./datasets/DrToolsMetric/drtools-metric-coupling.csv",
    "datasetNamespaces" : "./datasets/DrToolsMetric/drtools-metric-namespaces.csv",
    "datasetTypes" : "./datasets/DrToolsMetric/drtools-metric-types.csv",
    "datasetMethods" : "./datasets/DrToolsMetric/drtools-metric-methods.csv",
    "datasetInternalTypeDependencies" : "./datasets/DrToolsMetric/drtools-metric-internal-dependencies.json",
    "datasetInternalDependencies" : "./datasets/DrToolsMetric/drtools-metric-internal-dependencies.json"
};*/

// Project: Software Pathfinder
/*var optionsProject = {
    "projectName" : "Software Pathfinder",
    "datasetDir": "./datasets/Pathfinder/",
    "datasetSummary" : "./datasets/Pathfinder/drtools-metric-summary.csv",
    "datasetNamespaceCoupling" : "./datasets/Pathfinder/drtools-metric-coupling.csv",
    "datasetNamespaces" : "./datasets/Pathfinder/drtools-metric-namespaces.csv",
    "datasetTypes" : "./datasets/Pathfinder/drtools-metric-typesTop30.csv",
    //"datasetTypes" : "./datasets/Pathfinder/drtools-metric-types.csv",
    "datasetMethods" : "./datasets/Pathfinder/drtools-metric-methodsTop30.csv",
    //"datasetMethods" : "./datasets/Pathfinder/drtools-metric-methods.csv",
    "datasetInternalDependencies" : "./datasets/Pathfinder/drtools-metric-internal-dependencies.json",
};*/

// Project: Findbugs
var optionsProject = {
    "projectName" : "Findbugs 3.0.1",
    "datasetDir": "./datasets/FindBugs/",
    "datasetSummary" : "./datasets/FindBugs/drtools-metric-summary.csv",
    "datasetNamespaceCoupling" : "./datasets/FindBugs/drtools-metric-coupling.csv",
    "datasetNamespaces" : "./datasets/FindBugs/drtools-metric-namespaces.csv",
    "datasetTypes" : "./datasets/Pathfinder/drtools-metric-types.csv",
    "datasetMethods" : "./datasets/Pathfinder/drtools-metric-methods.csv",
    "datasetInternalTypeDependencies" : "", 
    "datasetInternalDependencies" : "./datasets/FindBugs/drtools-metric-internal-dependenciesTop40.json",
    "datasetCyclicDependencies" : "./datasets/FindBugs/drtools-metric-cyclic-dependencies.csv"
};

// Project: AcmeLibrary
/*var optionsProject = {
    "projectName" : "ACME Library",
    "datasetDir": "./datasets/ACMELibrary/",
    "datasetSummary" : "./datasets/ACMELibrary/drtools-metric-summary.csv",
    "datasetNamespaceCoupling" : "./datasets/ACMELibrary/drtools-metric-coupling.csv",
    "datasetNamespaces" : "./datasets/ACMELibrary/drtools-metric-namespaces.csv",
    "datasetTypes" : "./datasets/ACMELibrary/drtools-metric-types.csv",
    "datasetMethods" : "./datasets/ACMELibrary/drtools-metric-methods.csv",
    "datasetInternalDependencies" : "./datasets/ACMELibrary/drtools-metric-internal-dependencies.json"
};*/

// Titles
var graphTitles = {
    "titleSummary" : "Thermometer Visualization",

    "titleNamespace" : "Namespace Visualization",
    "titleNamespaceExplanation" : "NOC (Number of Classes/Types) and NAC (Number of Abstract Classes/Types)",

    "titleIAD" : "Instability/Abstractness/Distance Visualization",
    "titleIADExplanation" : "I (Instability), A (Abstractness Degree), and D (Normalized Distance)",

    "titleNamespaceCoupling" : "Namespace Coupling Visualization",
    "titleNamespaceCouplingExplanation" : "CA (Afferent Coupling) and CE (Efferent Coupling)",

    "titleType" : "Type Visualization",
    "titleTypeExplanation" : "Types with Number of Methods/Functions (NOM - y axis), Lines of Code (SLOC - x axis), Complexity (WMC - bubble color), and Dependencies (DEP - bubble size)",

    "titleMethod" : "Method Visualization",
    "titleMethodExplanation" : "Methods with Complexity (CYCLO - y axis), Lines of Code (MLOC - x axis), Number of Invocations (CALLS - bubble color), and Nested Block Depth (NBD - bubble size)",

    "titleInternalDependencies" : "Internal Dependencies Visualization",
    "titleInternalDependenciesExplanation" : "Internal dependencies between type/classes",

    "titleTypeCoupling1" : "Type Coupling Visualization",
    "titleTypeCoupling1Explanation" : "Red lines (output coupling) and green lines (input coupling)",

    "titleTypeCoupling2" : "Type Coupling Visualization",
    "titleTypeCoupling2Explanation" : "Types with I-DEP (y axis), DEP (x axis), FAN-IN (bubble color), and FAN-OUT (bubble size)",

    "titleThresholds" : "Metric Thresholds Information",

    "titleInstability" : "Instability and Abstractness Visualization",
    "titleInstabilityExplanation" : "Abstractness degree (y axis) and Instability (x axis)",

    "titleCyclicDependencies" : "Cyclic Dependencies Visualization",
    "titleCyclicDependenciesExplanation" : "Cyclic dependencies between type/classes"
};

// Titles
var errorMessage = {
    "msgSummary" : "File not found... It is not possible to visualize data about summary",
    "msgNamespaces" : "File not found... It is not possible to visualize data about namespaces",
    "msgTypes" : "File not found... It is not possible to visualize data about types",
    "msgMethods" : "File not found... It is not possible to visualize data about methods",
    "msgInternalDependencies" : "File not found... It is not possible to visualize data about internal types dependencies",
    "msgNamespaceCoupling" : "File not found... It is not possible to visualize data about namespace coupling",
    "msgTypeCoupling1" : "File not found... It is not possible to visualize data about type coupling",
    "msgIAD" : "File not found... It is not possible to visualize data about instability, abstractness, and distance",
    "msgInstability" : "File not found... It is not possible to visualize data about instability and abstractness",
    "msgTypeCoupling2" : "File not found... It is not possible to visualize data about type coupling",
    "msgCyclicDependencies" : "File not found... It is not possible to visualize data about cyclic dependencies"
};