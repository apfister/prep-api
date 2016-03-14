exports.get = function (query, cb) {
  var out_json = {};
  var data = [];
  var meta = {};

  try {
    if (query.ids) {
      data = _DASHBOARDS.filter(function (d) {
        return (query.ids.indexOf(d.id) !== -1);
      });
    } else {
      data = _DASHBOARDS;
    }

    out_json['data'] = data;
    out_json['meta'] = {};
  }
  catch (e) {
    console.log(e);
    out_json.errors = [];
    out_json.errors.push({
      status: '',
      detail: e,
      source: ''
    });
  }

  cb(null, out_json);
}