import assert from 'assert';
import Promise from 'bluebird';
import makeDebug from 'debug';
import fp from 'mostly-func';

const debug = makeDebug('playing:search-services:hooks');

function aggregateAuthors (hook, options) {
  return Promise.resolve({
    "type":"terms",
    "buckets":[
      {
        "key":"Administrator",
        "fetchedKey":{
          "entity-type":"user",
          "id":"Administrator",
          "properties":{
            "firstName":"",
            "lastName":"",
            "tenantId":null,
            "groups":[
              "administrators"
            ],
            "company":"",
            "email":"devnull@playingio.com",
            "username":"Administrator"
          },
          "isAdministrator":true,
          "isAnonymous":false
        },
        "docCount":97
      }
    ],
    "selection": []
  });
}

function aggregateCoverage (hook, options) {
  return Promise.resolve({
    "type":"terms",
    "buckets":[
      {
        "key":"south-america/Chile",
        "fetchedKey":{
          "entity-type":"directoryEntry",
          "directoryName":"l10ncoverage",
          "properties":{
            "parent":{
              "entity-type":"directoryEntry",
              "directoryName":"l10ncoverage",
              "properties":{
                "parent":"",
                "ordering":10000000,
                "obsolete":0,
                "id":"south-america",
                "label_en":"South-america",
                "label_fr":"Amérique du sud"
              }
            },
            "ordering":10000000,
            "obsolete":0,
            "id":"Chile",
            "label_en":"Chile",
            "label_fr":"Chili"
          }
        },
        "docCount":23
      },
      {
        "key":"africa/Angola",
        "fetchedKey":{
          "entity-type":"directoryEntry",
          "directoryName":"l10ncoverage",
          "properties":{
            "parent":{
              "entity-type":"directoryEntry",
              "directoryName":"l10ncoverage",
              "properties":{
                "parent":"",
                "ordering":10000000,
                "obsolete":0,
                "id":"africa",
                "label_en":"Africa",
                "label_fr":"Afrique"
              }
            },
            "ordering":10000000,
            "obsolete":0,
            "id":"Angola",
            "label_en":"Angola",
            "label_fr":"Angola"
          }
        },
        "docCount":1
      },
      {
        "key":"asia/China",
        "fetchedKey":{
          "entity-type":"directoryEntry",
          "directoryName":"l10ncoverage",
          "properties":{
            "parent":{
              "entity-type":"directoryEntry",
              "directoryName":"l10ncoverage",
              "properties":{
                "parent":"",
                "ordering":10000000,
                "obsolete":0,
                "id":"asia",
                "label_en":"Asia",
                "label_fr":"Asie"
              }
            },
            "ordering":10000000,
            "obsolete":0,
            "id":"China",
            "label_en":"China",
            "label_fr":"Chine"
          }
        },
        "docCount":1
      }
    ],
    "selection": []
  });
}

function aggregateCreatedAt (hook, options) {
  return Promise.resolve({
    "type": 'dateHistogram',
    "buckets":[
      {
        "from":1483228800000,
        "docCount":32,
        "to":1514764800000,
        "fromAsDate":1483228800000,
        "toAsDate":1514764800000,
        "key":"2017"
      },
      {
        "from":1451606400000,
        "docCount":7,
        "to":1483228800000,
        "fromAsDate":1451606400000,
        "toAsDate":1483228800000,
        "key":"2016"
      },
      {
        "from":1420070400000,
        "docCount":66,
        "to":1451606400000,
        "fromAsDate":1420070400000,
        "toAsDate":1451606400000,
        "key":"2015"
      }
    ],
    "selection": []
  });
}

function aggregateUpdatedAt (hook, options) {
  return Promise.resolve({
    "type": 'dateHistogram',
    "buckets":[
      {
        "from":1483228800000,
        "docCount":32,
        "to":1514764800000,
        "fromAsDate":1483228800000,
        "toAsDate":1514764800000,
        "key":"2017"
      },
      {
        "from":1451606400000,
        "docCount":7,
        "to":1483228800000,
        "fromAsDate":1451606400000,
        "toAsDate":1483228800000,
        "key":"2016"
      },
      {
        "from":1420070400000,
        "docCount":66,
        "to":1451606400000,
        "fromAsDate":1420070400000,
        "toAsDate":1451606400000,
        "key":"2015"
      }
    ],
    "selection": []
  });
}

function aggregateNature (hook, options) {
  return Promise.resolve({
    "type":"terms",
    "buckets":[
      {
        "key":"article",
        "fetchedKey":{
          "entity-type":"directoryEntry",
          "directoryName":"nature",
          "properties":{
            "ordering":10000000,
            "obsolete":0,
            "id":"article",
            "label":"Article"
          }
        },
        "docCount":5
      },
      {
        "key":"booklet",
        "fetchedKey":{
          "entity-type":"directoryEntry",
          "directoryName":"nature",
          "properties":{
            "ordering":10000000,
            "obsolete":0,
            "id":"booklet",
            "label":"Booklet"
          }
        },
        "docCount":2
      },
    ],
    "selection": []
  });
}

function aggregateSize (hook, options) {
  return Promise.resolve({
    "type":"range",
    "buckets":[
      {
        "from":"-Infinity",
        "docCount":11,
        "to":102400,
        "key":"tiny"
      },
      {
        "from":102401,
        "docCount":34,
        "to":1048576,
        "key":"small"
      },
      {
        "from":1048577,
        "docCount":28,
        "to":10485760,
        "key":"medium"
      },
      {
        "from":10485761,
        "docCount":2,
        "to":104857600,
        "key":"big"
      },
      {
        "from":104857601,
        "docCount":0,
        "to":"Infinity",
        "key":"huge"
      }
    ],
    "selection": []
  });
}

function aggregateSubjects (hook, options) {
  return Promise.resolve({
    "type":"terms",
    "buckets":[
      {
        "key":"daily life/tourism",
        "fetchedKey":{
          "entity-type":"directoryEntry",
          "directoryName":"l10nsubjects",
          "properties":{
            "parent":{
              "entity-type":"directoryEntry",
              "directoryName":"l10nsubjects",
              "properties":{
                "parent":"",
                "ordering":10000000,
                "obsolete":0,
                "id":"daily life",
                "label_en":"Daily life",
                "label_fr":"Vie quotidienne"
              }
            },
            "ordering":10000000,
            "obsolete":0,
            "id":"tourism",
            "label_en":"Tourism",
            "label_fr":"Tourisme"
          }
        },
        "docCount":24
      },
      {
        "key":"technology/it",
        "fetchedKey":{
          "entity-type":"directoryEntry",
          "directoryName":"l10nsubjects",
          "properties":{
            "parent":{
              "entity-type":"directoryEntry",
              "directoryName":"l10nsubjects",
              "properties":{
                "parent":"",
                "ordering":10000000,
                "obsolete":0,
                "id":"technology",
                "label_en":"Technology",
                "label_fr":"Technologie"
              }
            },
            "ordering":10000000,
            "obsolete":0,
            "id":"it",
            "label_en":"IT",
            "label_fr":"Informatique"
          }
        },
        "docCount":4
      }
    ],
    "selection": []
  });
}

function aggregateAll (hook, enrichers, options) {
  let promises = {};
  enrichers.forEach(enricher => {
    switch(enricher) {
      case 'coverage':
        promises.coverage = aggregateCoverage(hook, options);
        break;
      case 'createdAt':
        promises.createdAt = aggregateCreatedAt(hook, options);
        break;
      case 'updatedAt':
        promises.updatedAt = aggregateUpdatedAt(hook, options);
        break;
      case 'nature':
        promises.nature = aggregateNature(hook, options);
        break;
      case 'size':
        promises.size = aggregateSize(hook, options);
        break;
      case 'subjects':
        promises.subjects = aggregateSubjects(hook, options);
        break;
    }
  });
  return Promise.props(promises);
}

// Add aggregate metadata according to request header
export function aggregateEnrichers (options = {}) {
  return (hook) => {
    assert(hook.type === 'after', `aggregateEnrichers must be used as a 'after' hook.`);

    // If no enrichers-document header then skip this hook
    if (!(hook.params.headers && hook.params.headers['enrichers-aggregate'])) {
      debug('Skip aggregateEnrichers without headers', hook.params);
      return hook;
    }

    let enrichers = hook.params.headers['enrichers-aggregate'].split(',').map(e => e.trim());
    debug('enrichers-aggregate %j', enrichers);

    if (hook.result) {
      return aggregateAll(hook, enrichers, options).then((results) => {
        hook.result.metadata = hook.result.metadata || {};
        hook.result.metadata.aggregations = results;
        return hook;
      });
    }
  };
}