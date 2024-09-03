
export namespace InterplayCLI {

    type DesignTokenTheme = {
        /** Relative path to design token JSON file */
        path: string;

        /** Format of your tokens JSON */
        format?: string;

        /** Display name of this theme */
        name?: string;
    }

    interface TokensSettings {
        /**
         * Specify design tokens JSON files to import
         */
        designTokens?: DesignTokenTheme[];
    }


    type ExampleRule = {
        /** Pattern matching which example file(s) match with this rule */
        presetPath: string;

        /** Pattern matching which component name(s) to match with this rule */
        componentName?: string;

        /** Pattern matching which component path(s) to match with this rule */
        componentPath?: string;

        /** Per-component, per-file limit for number of matching instances to use as examples */
        limit?: number;
    }

    type Package = {
    
        /** Relative path to package.json for this package, from base of repo */
        packagePath: string;

        /** Relative path to component index to use for parsing, from base of repo */
        src?: string;

        /** Relative path to component index to use for build, from base of repo (defaults to src entry above) */
        build?: string;

        /** Relative path to types declaration index (.d.ts) to parse instead of source code */
        types?: string;

        /** Provide JSON manifest to populate props information for parsed components in this package */
        manifest?: {
            path: string;
            format: string;
        }

        /** Override existing name of package to import */
        name?: string;

        /** Provide custom settings for component parsing for exports in this package */
        componentSettings?: {
            [key: string]: {
                src?: {
                    relativePath: string;
                    exportName: string;
                },
                subComponents?: string[];
                [key: string]: any;
            }
        }
        
        /** Specify any exports in the src entry file that should be ignored */
        ignoreExports?: string[];
    }


    type Events = {
        /** modify config after the CLI resolves source files, before parsing */
        resolveComponentsComplete?: (context: object) => object;

        /** modify config after all parsing, before deploy to interplay */
        parsingComplete?: (context: object) => object;
    }

    type Modifiers = {
        /** modify the babel config used to transpile */
        babelConfig?: (config: any) => object;

        /** modify the webpack config used to bundle your build.entry */
        webpackConfig?: (config: any, webpack: Function) => object;  
    }

    interface ComponentsSettings {

        /** The framework used by your code components */
        framework: "react" | "webcomponents"

        /** The component packages to import from this repo */
        packages: Package[];

        /** Provide JSON manifest to populate props information for parsed components (all packages) */
        manifest?: {
            path: string;
            format: string;
        }

        /** npm packages to treat as externals when bundling components (react and react-dom are set automatically) */
        peerDependencies?: {
            [key: string]: string;
        }

        /** aliases to use for webpack and resolving import paths */
        alias?: {
            [key: string]: string;
        },

        /** Specify a component to use as a wrapper component (if required) when rendering components. The wrapper component must be exported from the deployed build  */
        wrapperComponent?: string;

        /** run webpack in development mode instead of (default) production mode */
        devBuild?: boolean;

        /**
         * Specify files to include on pages containing components, in addition to bundle files.
         * Can be list of urls and/or list of relative paths or glob pattern.
         * @default []
         */
         includePaths?: string[];

        /**
         * Specify additional files to deploy for components to work.
         * Can be list of relative paths or glob pattern.
         * @default []
         */
         deployPaths?: string[];

        /**
         * Specify files to parse for component examples.
         * Can be list of relative paths or glob pattern.
         * @default []
         */
        examplePaths?: string[];

        /**
         * Specify rules for choosing components instances to use as example.
         * @default []
         */
        exampleRules?: ExampleRule[];

        /**
         * CLI will add a default example for components returning truthy value from any function in array.
         * @default []
         */
        defaultPresets?: [];

        /**
         * Specify files containing inherited types whose props should be removed from component parsing result (typescript) 
         * @default []
         */
         filteredTypePaths?:  string[];

        /**
         * Specify names of custom types that should be treated as components when parsing component source files (typescript only) 
         * @default []
         */
         customComponentTypes?:  string[];

         /**
         * Specify file containing array of translations mapping design layers to code components
         */
         translationsPath?: string;

        events?: Events;
        modifiers?: Modifiers;

    }

    export type Settings = ComponentsSettings | TokensSettings | (ComponentsSettings & TokensSettings);
}

export namespace InterplayTranslations {
    
    type FigmaLayoutMode = 'HORIZONTAL' | 'VERTICAL';
    type FigmaComponent = '@figma/FRAME' | '@figma/COMPONENT' | '@figma/TEXT';
    type FigmaObjectType = 'FRAME' | 'ELLIPSE' | 'LINE'  | 'TEXT' | 'RECTANGLE' | 'SHAPE_WITH_TEXT' | 'COMPONENT'
    type FigmaRule = {
        component : {
            in?: FigmaComponent[] | string [];
            not?: FigmaComponent | string
        } | FigmaComponent | string,

        props?: {
            layoutMode? : {
                in?: FigmaLayoutMode[];
                not?: FigmaLayoutMode | {
                    in: FigmaLayoutMode[];
                }
            } | FigmaLayoutMode

            type? : {
                in?: FigmaObjectType[];
                not?: FigmaObjectType
            } | FigmaObjectType

            fontSize? : {
                in?: number[];
                not?: number;
                between?: [number, number];
            }
        }
    }


    type CSS = {

        //common
        width: string;
        height: string; 
        top: string;
        left: string; 
        position: string;               //'absolute'

        //box only
        border: string;
        borderRadius: number;
        overflow: string;               //'hidden'
        backgroundBlendMode: string;    //'normal'
        backgroundColor: string;        //'#00000'
        boxShadow: string;
        
        //autolayout box (not in typography)
        gap: string;

        //typography css
        display: string;                // 'flex'
        
        flexDirection: string;          //'column'
        color: string;                  // '#000000'
        whiteSpace: string;             // 'nowrap'
        alignItems: string;             // 'center'
        justifyContent: string;         //'center'

        textAlign: string;
        fontSize: number;
        fontWeight: number;
        fontStyle: string;              //'normal'
        fontFamily: string;
        letterSpacing: string           //'0.40px'
        lineHeight: string              //'25.50px'

    }

    type Node = {
        props: {
            //common
            x:number;
            y:number;
            width:number;
            height:number;
            id: string;
            name: string;
            tokens: {
                [key: string]: {
                    name: string;
                    value: any
                }
            };

            //typography node
            characters: string;
            fontSize: number;
            fontName: {
                family: string;
                style: string;
            }
            letterSpacing:{
                unit: 'PIXELS',
                value: number
            }
            lineHeight: {
                unit: 'PIXELS',
                value: number
            },
            textAlignHorizontal: 'CENTER';
            textAlignVertical: 'CENTER';
            


            //shape
            children: any;
            type: string;                   //'FRAME'
            cornerRadius: number; 
            fills: any;    
        }
    }

    type Token = {
        name: string;
        path: string;
        value: any;
    }

    type Tokens = {
        byPath: (path: string) => Token,
        findByValue: (value:any, path:string) => Token,
        findByClosestValue: (value:any, path:string) => Token
    }

    type FormulaContext = {
        css: CSS;
        node: Node; 
        tokens: Tokens;
    }

    type StringFormula = {
        formula: string;
    }

    type StringFunction = {
        fn: string;
    }

    type PropFunction = ((context: FormulaContext) => {});

    type ResultValue = {
        component: string;
        props: {
            [key: string]: PropFunction | string | number | StringFormula | StringFunction | undefined;
        }
    }

    export interface Translation {
        name: string;
        rule: FigmaRule;
        value?: ResultValue;
        fn?: any;
    }

}
