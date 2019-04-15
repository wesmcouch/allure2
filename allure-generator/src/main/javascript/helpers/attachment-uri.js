import {SafeString} from 'handlebars/runtime';

export default function attachmentUri(source) {
  let sourceUri;
  if (source !== undefined && source !== null && source.indexOf('http') === 0) {
    sourceUri = source;
  } else {
    sourceUri = 'data/attachments/' + source;
  }
  return new SafeString(`${sourceUri}`);
}
