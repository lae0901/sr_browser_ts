
import { testResults_append, testResults_consoleLog, testResults_new, iTestResultItem } from 'sr_test_framework';
import { path_dirName } from '../index' ;

// run main function that is declared as async. 
async_main();

// ------------------------------- async_main ---------------------------------
async function async_main()
{
  const results = path_tests( ) ;
  testResults_consoleLog( results ) ;

  return;
}

// ---------------------------------- path_tests ----------------------------------
// add and remove member from file.
function path_tests() 
{
  const results = testResults_new();

  // path_dirName
  {
    const method = 'path_dirName' ;
    const filePath = 'c:\\web\\tester\\index.ts' ;
    const dirName = path_dirName(filePath) ;
    if ( dirName == 'c:\\web\\tester')
      testResults_append( results, `dirName: ${dirName}`, '', method ) ;
    else
      testResults_append( results, '', `unexpected dirName ${dirName}`, method) ;
  }

  return results ;
}

