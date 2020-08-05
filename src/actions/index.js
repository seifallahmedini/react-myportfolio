import {FETCH_PORTFOLIO} from './constants';


export const fetchPortfolioListsCallback = data => ({
    type: FETCH_PORTFOLIO,
    payload: data,
})


export const fetchPortfolioLists = () => dispatch => {

    var projects = [
        {
            id: 1,
            name: 'React-Native TODO List Application',
            description: 'The react-native-todolist application is a cross-platform mobile application developed using the React-Native framework with Redux implementation. The application has features to create a calendar in both Google & Microsoft cloud platforms, users can also receive a push notification from the server based on topic subscription.',    banner: require('../images/todolist_app.png'),           
            tools: [
                {
                    name: 'react-native',
                    link: 'https://reactnative.dev/docs/0.5/getting-started'
                },
                {
                    name: 'redux',
                    link: 'https://redux.js.org/introduction/getting-started'
                },
                {
                    name: 'google-calendar-api',
                    link: 'https://developers.google.com/calendar/v3/reference/events'
                },
                {
                    name: 'microsoft-graph-api',
                    link: 'https://docs.microsoft.com/en-us/graph/api/calendar-post-events?view=graph-rest-1.0&tabs=http'
                }
            ],
            github: 'https://github.com/Deeptiman/react-native-todolist',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/react-native-todolist",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/react-native-todolist",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/react-native-todolist",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/react-native-todolist?label=Fork&style=social",
            hasGithub: true,
            hasMedium: false,
            medium: '',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 2,
            name: 'Hyperledger Fabric - Single Organization Demo',
            description: 'The Blockchain application written in Go language to demonstrate the Hyperledger Fabric Blockchain framework. The project repo has been designed to upload employee records into the blockchain and also has the functionality to update, delete the record stored securely in the Hyperledger framework.',
            banner: require('../images/hyperledger_single_org.png'),
            tools: [
                {
                    name: 'blockchain',
                    link: 'https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html'
                },
                {
                    name: 'hyperledger',
                    link: 'https://hyperledger-fabric.readthedocs.io/'
                },
                {
                    name: 'docker',
                    link: 'https://docs.docker.com/'
                },
                {
                    name: 'golang',
                    link: 'https://golang.org/doc/'
                }
            ],
            github: 'https://github.com/Deeptiman/employeeledger',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/employeeledger",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/employeeledger",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/employeeledger",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/employeeledger?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/a-single-organization-application-in-hyperledger-fabric-146c351b04b7',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 3,
            name: 'Hyperledger Fabric - Multi Organization Demo',
            description: 'The Blockchain network consists of four organization joined with a  single channel. The ledger data created in an organization can be accessible by the other participating organization in the network.',
            banner: require('../images/hyperledger_multi_org_banner.png'),
            tools: [
                {
                    name: 'blockchain',
                    link: 'https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html'
                },
                {
                    name: 'hyperledger',
                    link: 'https://hyperledger-fabric.readthedocs.io/'
                },
                {
                    name: 'docker',
                    link: 'https://docs.docker.com/'
                },
                {
                    name: 'golang',
                    link: 'https://golang.org/doc/'
                }
            ],
            github: 'https://github.com/Deeptiman/multiorgledger',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/multiorgledger",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/multiorgledger",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/multiorgledger",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/multiorgledger?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/a-multi-organization-application-in-hyperledger-fabric-8612cef5bbae',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 4,
            name: 'Hyperledger Fabric - Privacy and Confidentiality',
            description: 'The Blockchain application will store the records in a private network that the records will only be accessible to the parent organization unless the records are shared with other organization in the network. The project will demonstrate Privacy and Confidentiality in Hyperledger Fabric.',
            banner: require('../images/hyperledger_private_org_banner.png'),
            tools: [
                {
                    name: 'private-blockchain',
                    link: 'https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html'
                },
                {
                    name: 'hyperledger',
                    link: 'https://hyperledger-fabric.readthedocs.io/'
                },
                {
                    name: 'docker',
                    link: 'https://docs.docker.com/'
                },
                {
                    name: 'golang',
                    link: 'https://golang.org/doc/'
                },
                {
                    name: 'gdpr',
                    link: 'https://www.ibm.com/downloads/cas/GNQZVQR3'
                }
            ],
            github: 'https://github.com/Deeptiman/privateledger',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/privateledger",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/privateledger",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/privateledger",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/privateledger?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/confidentiality-and-private-data-in-hyperledger-fabric-1279c8e2e57f',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 5,
            name: 'Hyperledger Fabric - Offchain Storage',
            description: 'The Blockchain application is a sample demonstration to understand the concept of implementing offchain storage and it\'s capability in Hyperledger fabric Blockchain network. So, this project will work as a peer block event listener and will store the block details in the CouchDB that can be query through MapReduce.',
            banner: require('../images/hyperledger_offchain_data_banner.png'),
            tools: [
                {
                    name: 'blockchain',
                    link: 'https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html'
                },
                {
                    name: 'offchain-storage',
                    link: 'https://www.ibm.com/downloads/cas/RXOVXAPM'
                },
                {
                    name: 'couchdb',
                    link: 'https://docs.couchdb.org/'
                },
                {
                    name: 'mapreduce',
                    link: 'https://en.wikipedia.org/wiki/MapReduce'
                },
                {
                    name: 'grpc-go',
                    link: 'https://grpc.io/docs/languages/go/basics/'
                }
            ],
            github: 'https://github.com/Deeptiman/offchaindata',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/offchaindata",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/offchaindata",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/offchaindata",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/offchaindata?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/offchain-storage-in-hyperledger-fabric-77e28bd99e0c',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 6,
            name: 'Sur Sadhana',
            description: 'Sur Sadhana, it\'s a music app that a singer can analyse his/her singing skill. The app will give the Graphical representation of the voice with a scorecard to the singer.',
            banner: require('../images/sur_sadhana_banner.png'),
            tools: [
                {
                    name: 'android',
                    link: 'https://developer.android.com/'
                },
                {
                    name: 'android-audio-record',
                    link: 'https://developer.android.com/reference/android/media/AudioRecord'
                },
                {
                    name: 'achartengine',
                    link: 'https://github.com/ddanny/achartengine'
                },
                {
                    name: 'standard-deviation',
                    link: 'https://en.wikipedia.org/wiki/Standard_deviation'
                }
            ],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.shankarmahadevanacademy.sursadhana.swara'
        },
        {
            id: 7,
            name: 'Beat Station',
            description: 'BeatStation is a music app where people can listen to their favorite Genre online. The application is built with large storage of music mp3 files in the server that sync with the mobile application for the streaming of the music files.',
            banner: require('../images/beat_station.png'),
            tools: [
                {
                    name: 'play-audio-android',
                    link: 'https://developer.android.com/guide/topics/media/mediaplayer'
                },
                {
                    name: 'stream-mp3-android',
                    link: 'https://developer.android.com/guide/topics/media/mediaplayer'
                },
                {
                    name: 'aws-s3-bucket',
                    link: 'https://aws.amazon.com/s3/'
                },
                {
                    name: 'android-fragments',
                    link: 'https://developer.android.com/guide/components/fragments'
                }
            ],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.mdotbuz'
        },
        {
            id: 8,
            name: 'PHP Dom Parser and Translation Tool',
            description: 'The web application is developed to demonstrate translation in live web pages by parsing through HTML DOM and extracting the text element and match them with an English to Odia dictionary that is stored in a local database. The complete parsing result will preview as a translated webpage for a website.',
            banner: require('../images/parser_tool.png'),
            tools: [
                {
                    name: 'php',
                    link: 'https://www.php.net/docs.php'
                },
                {
                    name: 'dom-parser',
                    link: 'https://www.w3schools.com/php/php_xml_dom.asp'
                },
                {
                    name: 'statistical-machine-translation',
                    link: 'https://en.wikipedia.org/wiki/Statistical_machine_translation'
                },
                {
                    name: 'parallel-corpus',
                    link: 'https://en.wikipedia.org/wiki/Parallel_text'
                }
            ],
            github: 'https://github.com/Deeptiman/php-dom-parser-translation-tool',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/php-dom-parser-translation-tool",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/php-dom-parser-translation-tool",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/php-dom-parser-translation-tool",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/php-dom-parser-translation-tool?label=Fork&style=social",
            hasGithub: true,
            hasMedium: false,
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 9,
            name: 'Android Alphabet learning App',
            description: 'The application is an Odia letter learning app that be helpful for people to learn Odia letters writing. The app has a learning module that will help to learn and understand the exact writing of an Odia letter.',
            banner: require('../images/alphabet_app.png'),
            tools: [
                {
                    name: 'android-application',
                    link: 'https://developer.android.com/'
                },
                {
                    name: 'android-ndk',
                    link: 'https://developer.android.com/ndk'
                },
                {
                    name: 'gesture-recognition',
                    link: 'https://developer.android.com/training/gestures/detector'
                },
                {
                    name: 'odia-alphabet',
                    link: 'https://en.wikipedia.org/wiki/Odia_script'
                }
            ],
            github: 'https://github.com/Deeptiman/Alphabet-Learning-Android-Application',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/Alphabet-Learning-Android-Application",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/Alphabet-Learning-Android-Application",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/Alphabet-Learning-Android-Application",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/Alphabet-Learning-Android-Application?label=Fork&style=social",
            hasGithub: true,
            hasMedium: false,
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 10,
            name: 'Online Examination App',
            description: 'The application is an examination platform where a student can give an assessment online. The teachers can set questions and time for the assessment from the mobile application.',
            banner: require('../images/fellowprap_banner.png'),
            tools: [
                {
                    name: 'android-application',
                    link: 'https://developer.android.com/'
                },
                {
                    name: 'rest-api',
                    link: 'https://developers.google.com/android/guides/http-auth'
                },
                {
                    name: 'json',
                    link: 'https://www.json.org/'
                },
                {
                    name: 'sqlite',
                    link: 'https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase'
                },
                {
                    name: 'amazon-aws',
                    link: 'https://aws.amazon.com/'
                }
            ],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.mindtree.kefprap'
        },
        {
            id: 11,
            name: 'TODO List Planner App',
            description: 'In this application, the user can plan, schedule his/her daily activity. There is also a Calendar feature where the user can view their planned activity status with different distinct colors.',
            banner: require('../images/fellowregister_banner.png'),
            tools: [
               
                {
                    name: 'android-sync-adapter',
                    link: 'https://developer.android.com/training/sync-adapters/creating-sync-adapter'
                },
                {
                    name: 'rest-api',
                    link: 'https://developers.google.com/android/guides/http-auth'
                },
                {
                    name: 'json',
                    link: 'https://www.json.org/'
                },
                {
                    name: 'sqlite',
                    link: 'https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase'
                },
                {
                    name: 'amazon-aws',
                    link: 'https://aws.amazon.com/'
                }
            ],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.mindtree.keffellowregister'
        }
    ]

    dispatch(fetchPortfolioListsCallback(projects))
};