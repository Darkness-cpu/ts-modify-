Info seq  [hh:mm:ss:mss] currentDirectory:: /home/src/Vscode/Projects/bin useCaseSensitiveFileNames:: false
Info seq  [hh:mm:ss:mss] libs Location:: /home/src/tslibs/TS/Lib
Info seq  [hh:mm:ss:mss] globalTypingsCacheLocation:: /home/src/Library/Caches/typescript
Info seq  [hh:mm:ss:mss] Provided types map file "/home/src/tslibs/TS/Lib/typesMap.json" doesn't exist
//// [/home/src/tslibs/TS/Lib/lib.d.ts]
lib.d.ts-Text

//// [/home/src/tslibs/TS/Lib/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/home/src/workspaces/project/packages/app/package.json]
{ "name": "app", "dependencies": { "dep": "*" } }

//// [/home/src/workspaces/project/packages/app/src/a.ts]
import "dep";

//// [/home/src/workspaces/project/packages/app/src/index.ts]
dep1;

//// [/home/src/workspaces/project/packages/app/src/utils.ts]
dep2;

//// [/home/src/workspaces/project/packages/app/tsconfig.json]
{
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "baseUrl": ".",
    "paths": {
      "dep": ["../dep/src/main"],
      "dep/*": ["../dep/*"]
    }
  }
  "references": [{ "path": "../dep" }]
}

//// [/home/src/workspaces/project/packages/dep/package.json]
{ "name": "dep", "main": "dist/main.js", "types": "dist/main.d.ts" }

//// [/home/src/workspaces/project/packages/dep/src/main.ts]
import "./sub/folder";
export const dep1 = 0;

//// [/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts]
export const dep2 = 0;

//// [/home/src/workspaces/project/packages/dep/tsconfig.json]
{
  "compilerOptions": { "outDir": "dist", "rootDir": "src", "module": "commonjs" }
}


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/package.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/workspaces/project/packages/app/package.json ProjectRootPath: undefined:: Result: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating ConfiguredProject: /home/src/workspaces/project/packages/app/tsconfig.json, currentDirectory: /home/src/workspaces/project/packages/app
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/tsconfig.json 2000 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /home/src/workspaces/project/packages/app/tsconfig.json : {
 "rootNames": [
  "/home/src/workspaces/project/packages/app/src/a.ts",
  "/home/src/workspaces/project/packages/app/src/index.ts",
  "/home/src/workspaces/project/packages/app/src/utils.ts"
 ],
 "options": {
  "module": 1,
  "outDir": "/home/src/workspaces/project/packages/app/dist",
  "rootDir": "/home/src/workspaces/project/packages/app/src",
  "baseUrl": "/home/src/workspaces/project/packages/app",
  "paths": {
   "dep": [
    "../dep/src/main"
   ],
   "dep/*": [
    "../dep/*"
   ]
  },
  "pathsBasePath": "/home/src/workspaces/project/packages/app",
  "configFilePath": "/home/src/workspaces/project/packages/app/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/workspaces/project/packages/dep",
   "originalPath": "../dep"
  }
 ]
}
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/workspaces/project/packages/app/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/workspaces/project/packages/app/package.json to open"
      }
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app 1 undefined Config: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app 1 undefined Config: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/src/a.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/src/utils.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /home/src/workspaces/project/packages/dep/tsconfig.json : {
 "rootNames": [
  "/home/src/workspaces/project/packages/dep/src/main.ts",
  "/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts"
 ],
 "options": {
  "outDir": "/home/src/workspaces/project/packages/dep/dist",
  "rootDir": "/home/src/workspaces/project/packages/dep/src",
  "module": 1,
  "configFilePath": "/home/src/workspaces/project/packages/dep/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/dep/tsconfig.json 2000 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/dep 1 undefined Config: /home/src/workspaces/project/packages/dep/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/dep 1 undefined Config: /home/src/workspaces/project/packages/dep/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/dep/src/main.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/dep 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/dep 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/dep/src/sub/folder/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules/@types 1 undefined Project: /home/src/workspaces/project/packages/app/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/workspaces/project/packages/app/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/workspaces/project/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 lib.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts Text-1 "export const dep2 = 0;"
	/home/src/workspaces/project/packages/dep/src/main.ts Text-1 "import \"./sub/folder\";\nexport const dep1 = 0;"
	/home/src/workspaces/project/packages/app/src/a.ts Text-1 "import \"dep\";"
	/home/src/workspaces/project/packages/app/src/index.ts Text-1 "dep1;"
	/home/src/workspaces/project/packages/app/src/utils.ts Text-1 "dep2;"


	../../../../tslibs/TS/Lib/lib.d.ts
	  Default library for target 'es5'
	../../../../tslibs/TS/Lib/lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../../../tslibs/TS/Lib/lib.d.ts'
	../../../../tslibs/TS/Lib/lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../../../tslibs/TS/Lib/lib.d.ts'
	../dep/src/sub/folder/index.ts
	  Imported via "./sub/folder" from file '../dep/src/main.ts'
	../dep/src/main.ts
	  Imported via "dep" from file 'src/a.ts'
	src/a.ts
	  Matched by default include pattern '**/*'
	src/index.ts
	  Matched by default include pattern '**/*'
	src/utils.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/workspaces/project/packages/app/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/workspaces/project/packages/app/package.json",
        "configFile": "/home/src/workspaces/project/packages/app/tsconfig.json",
        "diagnostics": [
          {
            "start": {
              "line": 12,
              "offset": 18
            },
            "end": {
              "line": 12,
              "offset": 38
            },
            "text": "Referenced project '/home/src/workspaces/project/packages/dep' must have setting \"composite\": true.",
            "code": 6306,
            "category": "error",
            "fileName": "/home/src/workspaces/project/packages/app/tsconfig.json"
          },
          {
            "start": {
              "line": 12,
              "offset": 3
            },
            "end": {
              "line": 12,
              "offset": 15
            },
            "text": "',' expected.",
            "code": 1005,
            "category": "error",
            "fileName": "/home/src/workspaces/project/packages/app/tsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/workspaces/project/packages/app/tsconfig.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Creating InferredProject: /dev/null/inferredProject1*, currentDirectory: /home/src/workspaces/project/packages/app
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspaces/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 lib.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/home/src/workspaces/project/packages/app/package.json SVC-1-0 "{ \"name\": \"app\", \"dependencies\": { \"dep\": \"*\" } }"


	../../../../tslibs/TS/Lib/lib.d.ts
	  Default library for target 'es5'
	../../../../tslibs/TS/Lib/lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../../../tslibs/TS/Lib/lib.d.ts'
	../../../../tslibs/TS/Lib/lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../../../tslibs/TS/Lib/lib.d.ts'
	package.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/workspaces/project/packages/app/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Project '/home/src/workspaces/project/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/workspaces/project/packages/app/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 0,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/home/src/workspaces/project/jsconfig.json: *new*
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/app/jsconfig.json: *new*
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/app/package.json: *new*
  {"pollingInterval":250}
/home/src/workspaces/project/packages/app/src/a.ts: *new*
  {"pollingInterval":500}
/home/src/workspaces/project/packages/app/src/index.ts: *new*
  {"pollingInterval":500}
/home/src/workspaces/project/packages/app/src/utils.ts: *new*
  {"pollingInterval":500}
/home/src/workspaces/project/packages/app/tsconfig.json: *new*
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/dep/src/main.ts: *new*
  {"pollingInterval":500}
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts: *new*
  {"pollingInterval":500}
/home/src/workspaces/project/packages/dep/tsconfig.json: *new*
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/jsconfig.json: *new*
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/tsconfig.json: *new*
  {"pollingInterval":2000}
/home/src/workspaces/project/tsconfig.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/home/src/workspaces/node_modules: *new*
  {}
  {}
/home/src/workspaces/node_modules/@types: *new*
  {}
  {}
/home/src/workspaces/project/node_modules: *new*
  {}
  {}
/home/src/workspaces/project/node_modules/@types: *new*
  {}
  {}
/home/src/workspaces/project/packages/app: *new*
  {}
/home/src/workspaces/project/packages/app/node_modules: *new*
  {}
  {}
/home/src/workspaces/project/packages/app/node_modules/@types: *new*
  {}
  {}
/home/src/workspaces/project/packages/dep: *new*
  {}
  {}
/home/src/workspaces/project/packages/node_modules: *new*
  {}
  {}
/home/src/workspaces/project/packages/node_modules/@types: *new*
  {}
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false
/home/src/workspaces/project/packages/app/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: true

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/workspaces/project/packages/app/package.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/home/src/workspaces/project/packages/app/src/a.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/index.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/utils.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/main.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/workspaces/project/packages/app/src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/workspaces/project/packages/app/src/index.ts ProjectRootPath: undefined:: Result: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/home/src/workspaces/project/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/workspaces/project/packages/app/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/workspaces/project/packages/app/src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true
    }
After Request
watchedFiles::
/home/src/tslibs/TS/Lib/lib.d.ts:
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.d.ts:
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/app/package.json:
  {"pollingInterval":250}
/home/src/workspaces/project/packages/app/src/a.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/packages/app/src/utils.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/packages/app/tsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/dep/src/main.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/packages/dep/tsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/jsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/tsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/tsconfig.json:
  {"pollingInterval":2000}

watchedFiles *deleted*::
/home/src/workspaces/project/packages/app/src/index.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/home/src/workspaces/node_modules:
  {}
  {}
/home/src/workspaces/node_modules/@types:
  {}
  {}
/home/src/workspaces/project/node_modules:
  {}
  {}
/home/src/workspaces/project/node_modules/@types:
  {}
  {}
/home/src/workspaces/project/packages/app:
  {}
/home/src/workspaces/project/packages/app/node_modules:
  {}
  {}
/home/src/workspaces/project/packages/app/node_modules/@types:
  {}
  {}
/home/src/workspaces/project/packages/dep:
  {}
  {}
/home/src/workspaces/project/packages/node_modules:
  {}
  {}
/home/src/workspaces/project/packages/node_modules/@types:
  {}
  {}

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false
/home/src/workspaces/project/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    noOpenRef: false *changed*

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/workspaces/project/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/home/src/workspaces/project/packages/app/src/a.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/index.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/app/src/utils.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/main.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "preferences": {}
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 2,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/index.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 3,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 4,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/index.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 4,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'dep1'.",
          "start": 0,
          "length": 4,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 5
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 5,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/index.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 5,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 6,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/index.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 5,
        "errorCodes": [
          2304
        ]
      },
      "command": "getCodeFixes"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getCodeFixes",
      "request_seq": 6,
      "success": true,
      "body": [
        {
          "fixName": "import",
          "description": "Add import from \"dep\"",
          "changes": [
            {
              "fileName": "/home/src/workspaces/project/packages/app/src/index.ts",
              "textChanges": [
                {
                  "start": {
                    "line": 1,
                    "offset": 1
                  },
                  "end": {
                    "line": 1,
                    "offset": 1
                  },
                  "newText": "import { dep1 } from \"dep\";\r\n\r\n"
                }
              ]
            }
          ]
        }
      ]
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false
/home/src/workspaces/project/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false *changed*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { dep1 } from \"dep\";\r\n\r\n"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 7,
      "success": true
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false
/home/src/workspaces/project/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    autoImportProviderHost: false

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/workspaces/project/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/home/src/workspaces/project/packages/app/src/a.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/index.ts (Open) *changed*
    version: SVC-2-1 *changed*
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/app/src/utils.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/main.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 3,
        "endOffset": 1,
        "insertString": ""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 8,
      "success": true
    }
After Request
ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/workspaces/project/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/home/src/workspaces/project/packages/app/src/a.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/index.ts (Open) *changed*
    version: SVC-2-2 *changed*
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/app/src/utils.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/main.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 9,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/utils.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/workspaces/project/packages/app/src/utils.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/workspaces/project/packages/app/src/utils.ts ProjectRootPath: undefined:: Result: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/workspaces/project/packages/app/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/workspaces/project/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/home/src/tslibs/TS/Lib/lib.d.ts Text-1 lib.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts Text-1 "export const dep2 = 0;"
	/home/src/workspaces/project/packages/dep/src/main.ts Text-1 "import \"./sub/folder\";\nexport const dep1 = 0;"
	/home/src/workspaces/project/packages/app/src/a.ts Text-1 "import \"dep\";"
	/home/src/workspaces/project/packages/app/src/index.ts SVC-2-2 "dep1;"
	/home/src/workspaces/project/packages/app/src/utils.ts Text-1 "dep2;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/workspaces/project/packages/app/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/workspaces/project/packages/app/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/workspaces/project/packages/app/src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/workspaces/project/packages/app/src/utils.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/workspaces/project/packages/app/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 9,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/home/src/tslibs/TS/Lib/lib.d.ts:
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.d.ts:
  {"pollingInterval":500}
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/jsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/app/jsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/app/package.json:
  {"pollingInterval":250}
/home/src/workspaces/project/packages/app/src/a.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/packages/app/tsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/dep/src/main.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts:
  {"pollingInterval":500}
/home/src/workspaces/project/packages/dep/tsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/jsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/packages/tsconfig.json:
  {"pollingInterval":2000}
/home/src/workspaces/project/tsconfig.json:
  {"pollingInterval":2000}

watchedFiles *deleted*::
/home/src/workspaces/project/packages/app/src/utils.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
/home/src/workspaces/node_modules:
  {}
  {}
/home/src/workspaces/node_modules/@types:
  {}
  {}
/home/src/workspaces/project/node_modules:
  {}
  {}
/home/src/workspaces/project/node_modules/@types:
  {}
  {}
/home/src/workspaces/project/packages/app:
  {}
/home/src/workspaces/project/packages/app/node_modules:
  {}
  {}
/home/src/workspaces/project/packages/app/node_modules/@types:
  {}
  {}
/home/src/workspaces/project/packages/dep:
  {}
  {}
/home/src/workspaces/project/packages/node_modules:
  {}
  {}
/home/src/workspaces/project/packages/node_modules/@types:
  {}
  {}

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false
/home/src/workspaces/project/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 1
    dirty: false *changed*
    autoImportProviderHost: false

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/workspaces/project/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/home/src/workspaces/project/packages/app/src/a.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/app/src/utils.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/dep/src/main.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 10,
      "type": "request",
      "arguments": {
        "preferences": {}
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 10,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 11,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/utils.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 11,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 12,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/utils.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 12,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'dep2'.",
          "start": 0,
          "length": 4,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 5
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 13,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/utils.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 13,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 14,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/utils.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 5,
        "errorCodes": [
          2304
        ]
      },
      "command": "getCodeFixes"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getCodeFixes",
      "request_seq": 14,
      "success": true,
      "body": [
        {
          "fixName": "import",
          "description": "Add import from \"dep/src/sub/folder\"",
          "changes": [
            {
              "fileName": "/home/src/workspaces/project/packages/app/src/utils.ts",
              "textChanges": [
                {
                  "start": {
                    "line": 1,
                    "offset": 1
                  },
                  "end": {
                    "line": 1,
                    "offset": 1
                  },
                  "newText": "import { dep2 } from \"dep/src/sub/folder\";\r\n\r\n"
                }
              ]
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 15,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/utils.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { dep2 } from \"dep/src/sub/folder\";\r\n\r\n"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 15,
      "success": true
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false
/home/src/workspaces/project/packages/app/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    autoImportProviderHost: false

ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/workspaces/project/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/home/src/workspaces/project/packages/app/src/a.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/app/src/utils.ts (Open) *changed*
    version: SVC-2-1 *changed*
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/dep/src/main.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 16,
      "type": "request",
      "arguments": {
        "file": "/home/src/workspaces/project/packages/app/src/utils.ts",
        "line": 1,
        "offset": 1,
        "endLine": 3,
        "endOffset": 1,
        "insertString": ""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 16,
      "success": true
    }
After Request
ScriptInfos::
/home/src/tslibs/TS/Lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/tslibs/TS/Lib/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/workspaces/project/packages/app/tsconfig.json
        /dev/null/inferredProject1*
/home/src/workspaces/project/packages/app/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/home/src/workspaces/project/packages/app/src/a.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/app/src/index.ts (Open)
    version: SVC-2-2
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/app/src/utils.ts (Open) *changed*
    version: SVC-2-2 *changed*
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json *default*
/home/src/workspaces/project/packages/dep/src/main.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json
/home/src/workspaces/project/packages/dep/src/sub/folder/index.ts
    version: Text-1
    containingProjects: 1
        /home/src/workspaces/project/packages/app/tsconfig.json