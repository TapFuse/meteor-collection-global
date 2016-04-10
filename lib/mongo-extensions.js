Mongo.Collection.prototype._writeCollectionLog = function(userId, doc, fieldNames, modifier) {
  const collectionName = this._name;
  let oldValue = {};
  if (fieldNames) {
    for (let i = fieldNames.length - 1; i >= 0; i--) {
      oldValue[fieldNames[i]] = doc[fieldNames[i]];
    }
  }
  const modifierValue = JSON.stringify(modifier).replace(/"/g, "'");
  oldValue = JSON.stringify(oldValue).replace(/"/g, "'");
  const options = {
    userId: userId,
    docId: doc._id,
    collection: collectionName,
    appId: doc.appId ? doc.appId : '',
    projectId: doc.projectId ? doc.projectId : '',
    modifier: modifierValue,
    fieldNames: fieldNames,
    oldValue: oldValue,
    createdAt: new Date(),
  };
  CollectionLogs.upsert({docId: doc._id, userId: userId}, {$set: options}, function(err, res) {
    if (err) {
      console.log('collection-server-extend.js err:', err);
    }
  });
};
