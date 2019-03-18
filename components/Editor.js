import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import config from '../config/config';
import ipfs from '../utils/ipfs';


const BraftEditorWithNoSSR = dynamic(import('braft-editor'), {
  ssr: false
});

class Editor extends Component {
  state = {
    loading: false,
    ipfsHash: null,
    buffer: ''
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      require('braft-editor/dist/index.css');
    }
  }

  captureFile = (file, callback) => {
    console.log('capture');
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.convertToBuffer(reader, callback);
    };
  };

  convertToBuffer = async (reader, callback) => {
    console.log('convert');
    //file is converted to a buffer to prepare for uploading to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    callback && (await callback(buffer));
    // this.setState({ buffer });
  };

  uploadFn = async param => {
    // upload request
    const files = [
      {
        path: param.file
        // content: (Buffer or Readable stream)
      }
    ];

    try {
      // read file by Reader
      const file = files[0];
      const fileContent = this.captureFile(file, async buffer => {
        console.log('buffer', buffer);
        const result = await ipfs.files.add(buffer);
        const uploadedFile = result[0];
        console.log('upload result', result);
        param.success({
          url: `${config.ipfs.gateway}${uploadedFile.hash}`,
          meta: {
            // id: 'xxx',
            // title: 'xxx',
            // alt: 'xxx',
            // loop: true, // 指定音视频是否循环播放
            // autoPlay: true, // 指定音视频是否自动播放
            // controls: true, // 指定音视频是否显示控制栏
            // poster: 'http://xxx/xx.png', // 指定视频播放器的封面
          }
        });
      });
    } catch (error) {
      errorFn();
    }
  };

  editorProps = {
    initialContent: '',
    media: {
      allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
      image: true, // 开启图片插入功能
      video: true, // 开启视频插入功能
      audio: true, // 开启音频插入功能
      validateFn: null, // 指定本地校验函数，说明见下文
      uploadFn: null, // 指定上传函数，说明见下文
      removeConfirmFn: null, // 指定删除前的确认函数，说明见下文
      onRemove: null, // 指定媒体库文件被删除时的回调，参数为被删除的媒体文件列表(数组)
      onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
      onInsert: null // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
    },
    excludeControls: [
      'clear'
    ]
  };

  

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
      >
        <div
          style={{
            border: 'solid 1px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',
            marginBottom: '15px'
          }}
        >
          <BraftEditorWithNoSSR
            {...config.braftEditor}
            {...this.editorProps}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default Editor;


