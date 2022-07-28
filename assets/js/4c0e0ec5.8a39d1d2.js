"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3141],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_label:"BNB Smart Chain Verify Node",hide_table_of_contents:!1,sidebar_position:2},l="How to Run A Verify Node on BNB Smart Chain",c={unversionedId:"BSC-verify-node",id:"BSC-verify-node",isDocsHomePage:!1,title:"How to Run A Verify Node on BNB Smart Chain",description:"Verify Node Functions",source:"@site/docs/BSC-verify-node.md",sourceDirName:".",slug:"/BSC-verify-node",permalink:"/docs/BSC-verify-node",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BSC-verify-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BNB Smart Chain Verify Node",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BNB Smart Chain Separate Node",permalink:"/docs/BSC-separate-node"},next:{title:"BNB Smart Chain Fast Node",permalink:"/docs/BSC-fast-node"}},d=[{value:"Verify Node Functions",id:"verify-node-functions",children:[],level:2},{value:"Suggested Requirements",id:"suggested-requirements",children:[{value:"Verify Node",id:"verify-node",children:[],level:3}],level:2},{value:"Settings",id:"settings",children:[],level:2},{value:"Chaindata Snapshot",id:"chaindata-snapshot",children:[],level:2},{value:"Steps to Run a Verify Node",id:"steps-to-run-a-verify-node",children:[{value:"Sync From Snapshot (Recommended)",id:"sync-from-snapshot-recommended",children:[],level:3},{value:"Sync From Genesis Block (Not Recommended)",id:"sync-from-genesis-block-not-recommended",children:[],level:3}],level:2},{value:"Node Maintainence",id:"node-maintainence",children:[{value:"Peer Discovery",id:"peer-discovery",children:[],level:3},{value:"Binary",id:"binary",children:[],level:3},{value:"Storage",id:"storage",children:[],level:3},{value:"Diff Sync",id:"diff-sync",children:[],level:3},{value:"Light Storage",id:"light-storage",children:[],level:3}],level:2},{value:"Upgrade Geth",id:"upgrade-geth",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-a-verify-node-on-bnb-smart-chain"},"How to Run A Verify Node on BNB Smart Chain"),(0,o.kt)("h2",{id:"verify-node-functions"},"Verify Node Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stores the full blockchain history on disk and can answer the data request from the network."),(0,o.kt)("li",{parentName:"ul"},"Receives and validates the new blocks and transactions."),(0,o.kt)("li",{parentName:"ul"},"Verifies the states of every accounts."),(0,o.kt)("li",{parentName:"ul"},"Verifies the stated of Fast Node.")),(0,o.kt)("h2",{id:"suggested-requirements"},"Suggested Requirements"),(0,o.kt)("h3",{id:"verify-node"},"Verify Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X or Linux."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IMPORTANT")," 2T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms"),(0,o.kt)("li",{parentName:"ul"},"16 cores of CPU and 64 gigabytes of memory (RAM)"),(0,o.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, or c2-standard-16 on Google cloud."),(0,o.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 10 megabyte per second")),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("h2",{id:"chaindata-snapshot"},"Chaindata Snapshot"),(0,o.kt)("p",null,"Please download the chain data ",(0,o.kt)("a",{parentName:"p",href:"./snapshot"},"snapshot")," and extract to your home folder to speed up"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## Extract the data\nunzip geth.zip -d /NAME_OF_YOUR_HOME/node &\n")),(0,o.kt)("h2",{id:"steps-to-run-a-verify-node"},"Steps to Run a Verify Node"),(0,o.kt)("h3",{id:"sync-from-snapshot-recommended"},"Sync From Snapshot (Recommended)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the pre-build binaries from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Download the config files")),(0,o.kt)("p",null,"Download ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Download snapshot")),(0,o.kt)("p",null,"Download latest snapshot from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-snapshots"},"Download site"),"\nFollow the guide to structure the files."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start a full node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"geth --config ./config.toml --datadir ./node --diffsync --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,o.kt)("h3",{id:"sync-from-genesis-block-not-recommended"},"Sync From Genesis Block (Not Recommended)"),(0,o.kt)("p",null,"1.Build from source code"),(0,o.kt)("p",null,"Make sure that you have installed ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go 1.13+")," and have added ",(0,o.kt)("inlineCode",{parentName:"p"},"GOPATH")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/bnb-chain/bsc\n# Enter the folder bsc was cloned into\ncd bsc\n# Compile and install bsc\nmake geth\n")),(0,o.kt)("p",null,"or you can download the pre-build binaries from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/latest"},"release page")," or follow the instructions below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_linux |cut -d\\" -f4)\n# MacOS\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep geth_mac |cut -d\\" -f4)\n')),(0,o.kt)("p",null,"2.Download the config files"),(0,o.kt)("p",null,"Download ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'## mainet\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\\" -f4)\nunzip mainnet.zip\n\n## testnet\nwget   $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep testnet |cut -d\\" -f4)\nunzip testnet.zip\n')),(0,o.kt)("p",null,"3.Write genesis state locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth --datadir node init genesis.json\n")),(0,o.kt)("p",null,"You could see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INFO [05-19|14:53:17.468] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/chaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.498] Writing custom genesis block\nINFO [05-19|14:53:17.501] Persisted trie from memory database      nodes=21 size=56.84KiB time=357.915\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.502] Successfully wrote genesis state         database=chaindata hash=7d79cc\u2026fb0d1e\nINFO [05-19|14:53:17.503] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bsc/node/geth/lightchaindata cache=16.00MiB handles=16\nINFO [05-19|14:53:17.524] Writing custom genesis block\nINFO [05-19|14:53:17.525] Persisted trie from memory database      nodes=21 size=56.84KiB time=638.396\xb5s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B\nINFO [05-19|14:53:17.528] Successfully wrote genesis state         database=lightchaindata hash=7d79cc\u2026fb0d1e\n")),(0,o.kt)("p",null,"4.Start your verify node"),(0,o.kt)("p",null,"!!! Note\nBREAKING CHANGE: Non-EIP155 transactions (i.e. transactions which are not replay-protected) are now rejected by the RPC API. You can disable this restriction using the --rpc.allow-unprotected-txs command-line flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## start a verify node\ngeth --enabletrustprotocol --persistdiff --diffblock 1000000000 --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0\n")),(0,o.kt)("h2",{id:"node-maintainence"},"Node Maintainence"),(0,o.kt)("h3",{id:"peer-discovery"},"Peer Discovery"),(0,o.kt)("p",null,"The bootstrap nodes will be enhanced in the short future. So far, a discovery http service will provide some stable public p2p peers for syncing. Please visit ",(0,o.kt)("a",{parentName:"p",href:"https://api.binance.org/v1/discovery/peers"},"https://api.binance.org/v1/discovery/peers")," to get dynamic peer info. You can append the peer info to the ",(0,o.kt)("inlineCode",{parentName:"p"},"StaticNodes")," in the config.toml to enhance the networking of the full nodes. To avoid crowded networking, the discovery service will change the peer info from time to time, try fetch new ones if the connected peers of full node are too few."),(0,o.kt)("h3",{id:"binary"},"Binary"),(0,o.kt)("p",null,"All the clients are suggested to upgrade to the latest release. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc/releases/latest"},"latest version")," is supposed to be more stable and get better performance."),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("p",null,"According to the test, the performance of a verifynode will degrade when the storage size exceeds 1.5T. We suggest the verifynode always keep light storage by pruning the storage. "),(0,o.kt)("p",null,"How to prune:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the BSC node."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"nohup geth snapshot prune-state --datadir {the data dir of your bsc node} &"),". It will take 3-5 hours to finish."),(0,o.kt)("li",{parentName:"ol"},"Start the node once it is done.")),(0,o.kt)("p",null,"The maintainers should always have a few backup nodes."),(0,o.kt)("p",null,"The hardware is also important, ",(0,o.kt)("strong",{parentName:"p"},"make sure the SSD meets: 2T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms"),"."),(0,o.kt)("h3",{id:"diff-sync"},"Diff Sync"),(0,o.kt)("p",null,"The diffsync protocol rolled out as a stable feature in release v1.1.5. Diff sync improves the syncing speed by 60%\uff5e70% approximately according to the test. All full nodes are suggested to enable it by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"--diffsync")," in the starting command.  "),(0,o.kt)("h3",{id:"light-storage"},"Light Storage"),(0,o.kt)("p",null,"When the node crashes or been force killed, the node will sync from a block that was a few minutes or a few hours ago. This is because the state in memory is not persisted into the database in real time, and the node needs to replay blocks from the last checkpoint once it start. The replaying time dependents on the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"TrieTimeout")," in the config.toml.  We suggest you raise it if you can tolerate with long replaying time, so the node can keep light storage."),(0,o.kt)("h2",{id:"upgrade-geth"},"Upgrade Geth"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/upgrade-fullnode"},"this guide")))}u.isMDXComponent=!0}}]);