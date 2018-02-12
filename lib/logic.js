/**
 * @param {org.example.biznet.DeliverLoad} deliver - the load to be delivered
 * @transaction
 *
 */
function deliverLoad(deliver) {
    deliver.deliveredLoad.shipper = deliver.deliveredByShipper;
    return getAssetRegistry('org.example.biznet.Load')
        .then(function (assetRegistry) {
            return assetRegistry.update(deliver.deliveredLoad);
        });
}
/**
 *
 * @param {org.example.biznet.UpdateLoadStatus} updateLoad - the load to be updated
 * @transaction
 */
function updateLoadStatus(updateLoad) {
  updateLoad.load.loadStatus = updateLoad.newStatus
  return getAssetRegistry('org.example.biznet.Load')
        .then(function (assetRegistry) {
            return assetRegistry.update(updateLoad.load);
        });
}
/**
 *
 * @param {org.example.biznet.AddLoadToOrder} addLoad - the load to be added
 * @transaction
 */
function addLoadToOrder(addLoad) {
  addLoad.order.loads.push(addLoad.load)
  return getAssetRegistry('org.example.biznet.TransportOrder')
        .then(function (assetRegistry) {
            return assetRegistry.update(addLoad.order);
        });
}
