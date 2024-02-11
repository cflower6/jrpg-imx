import {
  ALPHA_MODES,
  AbstractMultiResource,
  ArrayResource,
  Attribute,
  BLEND_MODES,
  BUFFER_BITS,
  BUFFER_TYPE,
  BackgroundSystem,
  BaseImageResource,
  BaseRenderTexture,
  BaseTexture,
  BatchDrawCall,
  BatchGeometry,
  BatchRenderer,
  BatchShaderGenerator,
  BatchSystem,
  BatchTextureArray,
  Bounds,
  BrowserAdapter,
  Buffer,
  BufferResource,
  BufferSystem,
  CLEAR_MODES,
  COLOR_MASK_BITS,
  CanvasResource,
  Circle,
  Color,
  Container,
  ContextSystem,
  CubeResource,
  DEG_TO_RAD,
  DRAW_MODES,
  DisplayObject,
  ENV,
  Ellipse,
  ExtensionType,
  FORMATS,
  FillStyle,
  Filter,
  FilterState,
  FilterSystem,
  Framebuffer,
  FramebufferSystem,
  GC_MODES,
  GLFramebuffer,
  GLProgram,
  GLTexture,
  GRAPHICS_CURVES,
  GenerateTextureSystem,
  Geometry,
  GeometrySystem,
  Graphics,
  GraphicsData,
  GraphicsGeometry,
  IGLUniformData,
  INSTALLED,
  ImageBitmapResource,
  ImageResource,
  LINE_CAP,
  LINE_JOIN,
  LineStyle,
  MASK_TYPES,
  MIPMAP_MODES,
  MSAA_QUALITY,
  MaskData,
  MaskSystem,
  Matrix,
  Mesh,
  MeshBatchUvs,
  MeshGeometry,
  MeshMaterial,
  MultisampleSystem,
  NineSlicePlane,
  ObjectRenderer,
  ObjectRendererSystem,
  ObservablePoint,
  PI_2,
  PRECISION,
  PlaneGeometry,
  PluginSystem,
  Point,
  Polygon,
  Program,
  ProjectionSystem,
  Quad,
  QuadUv,
  RAD_TO_DEG,
  RENDERER_TYPE,
  Rectangle,
  RenderTexture,
  RenderTexturePool,
  RenderTextureSystem,
  Renderer,
  Resource,
  RopeGeometry,
  RoundedRectangle,
  Runner,
  SAMPLER_TYPES,
  SCALE_MODES,
  SHAPES,
  SVGResource,
  ScissorSystem,
  Shader,
  ShaderSystem,
  SimpleMesh,
  SimplePlane,
  SimpleRope,
  Sprite,
  SpriteMaskFilter,
  StartupSystem,
  State,
  StateSystem,
  StencilSystem,
  SystemManager,
  TARGETS,
  TEXT_GRADIENT,
  TYPES,
  TemporaryDisplayObject,
  Text,
  TextMetrics,
  TextStyle,
  Texture,
  TextureGCSystem,
  TextureMatrix,
  TextureSystem,
  TextureUvs,
  Ticker,
  TickerPlugin,
  Transform,
  TransformFeedback,
  TransformFeedbackSystem,
  UPDATE_PRIORITY,
  UniformGroup,
  VERSION,
  VideoResource,
  ViewSystem,
  ViewableBuffer,
  WRAP_MODES,
  autoDetectRenderer,
  autoDetectResource,
  checkMaxIfStatementsInShader,
  createUBOElements,
  curves,
  defaultFilterVertex,
  defaultVertex,
  extensions,
  generateProgram,
  generateUniformBufferSync,
  getTestContext,
  getUBOData,
  graphicsUtils,
  groupD8,
  isMobile,
  lib_exports,
  settings,
  uniformParsers,
  unsafeEvalSupported
} from "./chunk-TARWKFOR.js";
import "./chunk-CW6YSS5F.js";
import "./chunk-WGAPYIUP.js";

// node_modules/@pixi/mixin-cache-as-bitmap/lib/index.mjs
var _tempMatrix = new Matrix();
DisplayObject.prototype._cacheAsBitmap = false;
DisplayObject.prototype._cacheData = null;
DisplayObject.prototype._cacheAsBitmapResolution = null;
DisplayObject.prototype._cacheAsBitmapMultisample = null;
var CacheData = class {
  constructor() {
    this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
  }
};
Object.defineProperties(DisplayObject.prototype, {
  /**
   * The resolution to use for cacheAsBitmap. By default this will use the renderer's resolution
   * but can be overriden for performance. Lower values will reduce memory usage at the expense
   * of render quality. A falsey value of `null` or `0` will default to the renderer's resolution.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new resolution.
   * @member {number|null} cacheAsBitmapResolution
   * @memberof PIXI.DisplayObject#
   * @default null
   */
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(resolution) {
      resolution !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = resolution, this.cacheAsBitmap && (this.cacheAsBitmap = false, this.cacheAsBitmap = true));
    }
  },
  /**
   * The number of samples to use for cacheAsBitmap. If set to `null`, the renderer's
   * sample count is used.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new number of samples.
   * @member {number|null} cacheAsBitmapMultisample
   * @memberof PIXI.DisplayObject#
   * @default null
   */
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(multisample) {
      multisample !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = multisample, this.cacheAsBitmap && (this.cacheAsBitmap = false, this.cacheAsBitmap = true));
    }
  },
  /**
   * Set this to true if you want this display object to be cached as a bitmap.
   * This basically takes a snapshot of the display object as it is at that moment. It can
   * provide a performance benefit for complex static displayObjects.
   * To remove simply set this property to `false`
   *
   * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
   * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(value) {
      if (this._cacheAsBitmap === value)
        return;
      this._cacheAsBitmap = value;
      let data;
      value ? (this._cacheData || (this._cacheData = new CacheData()), data = this._cacheData, data.originalRender = this.render, data.originalRenderCanvas = this.renderCanvas, data.originalUpdateTransform = this.updateTransform, data.originalCalculateBounds = this.calculateBounds, data.originalGetLocalBounds = this.getLocalBounds, data.originalDestroy = this.destroy, data.originalContainsPoint = this.containsPoint, data.originalMask = this._mask, data.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (data = this._cacheData, data.sprite && this._destroyCachedDisplayObject(), this.render = data.originalRender, this.renderCanvas = data.originalRenderCanvas, this.calculateBounds = data.originalCalculateBounds, this.getLocalBounds = data.originalGetLocalBounds, this.destroy = data.originalDestroy, this.updateTransform = data.originalUpdateTransform, this.containsPoint = data.originalContainsPoint, this._mask = data.originalMask, this.filterArea = data.originalFilterArea);
    }
  }
});
DisplayObject.prototype._renderCached = function(renderer) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(renderer), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(renderer));
};
DisplayObject.prototype._initCachedDisplayObject = function(renderer) {
  var _a, _b;
  if ((_a = this._cacheData) == null ? void 0 : _a.sprite)
    return;
  const cacheAlpha = this.alpha;
  this.alpha = 1, renderer.batch.flush();
  const bounds = this.getLocalBounds(new Rectangle(), true);
  if ((_b = this.filters) == null ? void 0 : _b.length) {
    const padding = this.filters[0].padding;
    bounds.pad(padding);
  }
  const resolution = this.cacheAsBitmapResolution || renderer.resolution;
  bounds.ceil(resolution), bounds.width = Math.max(bounds.width, 1 / resolution), bounds.height = Math.max(bounds.height, 1 / resolution);
  const cachedRenderTexture = renderer.renderTexture.current, cachedSourceFrame = renderer.renderTexture.sourceFrame.clone(), cachedDestinationFrame = renderer.renderTexture.destinationFrame.clone(), cachedProjectionTransform = renderer.projection.transform, renderTexture = RenderTexture.create({
    width: bounds.width,
    height: bounds.height,
    resolution,
    multisample: this.cacheAsBitmapMultisample ?? renderer.multisample
  }), textureCacheId = `cacheAsBitmap_${lib_exports.uid()}`;
  this._cacheData.textureCacheId = textureCacheId, BaseTexture.addToCache(renderTexture.baseTexture, textureCacheId), Texture.addToCache(renderTexture, textureCacheId);
  const m = this.transform.localTransform.copyTo(_tempMatrix).invert().translate(-bounds.x, -bounds.y);
  this.render = this._cacheData.originalRender, renderer.render(this, { renderTexture, clear: true, transform: m, skipUpdateTransform: false }), renderer.framebuffer.blit(), renderer.projection.transform = cachedProjectionTransform, renderer.renderTexture.bind(cachedRenderTexture, cachedSourceFrame, cachedDestinationFrame), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = cacheAlpha;
  const cachedSprite = new Sprite(renderTexture);
  cachedSprite.transform.worldTransform = this.transform.worldTransform, cachedSprite.anchor.x = -(bounds.x / bounds.width), cachedSprite.anchor.y = -(bounds.y / bounds.height), cachedSprite.alpha = cacheAlpha, cachedSprite._bounds = this._bounds, this._cacheData.sprite = cachedSprite, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
};
DisplayObject.prototype._renderCachedCanvas = function(renderer) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(renderer), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(renderer));
};
DisplayObject.prototype._initCachedDisplayObjectCanvas = function(renderer) {
  var _a;
  if ((_a = this._cacheData) == null ? void 0 : _a.sprite)
    return;
  const bounds = this.getLocalBounds(new Rectangle(), true), cacheAlpha = this.alpha;
  this.alpha = 1;
  const cachedRenderTarget = renderer.canvasContext.activeContext, cachedProjectionTransform = renderer._projTransform, resolution = this.cacheAsBitmapResolution || renderer.resolution;
  bounds.ceil(resolution), bounds.width = Math.max(bounds.width, 1 / resolution), bounds.height = Math.max(bounds.height, 1 / resolution);
  const renderTexture = RenderTexture.create({
    width: bounds.width,
    height: bounds.height,
    resolution
  }), textureCacheId = `cacheAsBitmap_${lib_exports.uid()}`;
  this._cacheData.textureCacheId = textureCacheId, BaseTexture.addToCache(renderTexture.baseTexture, textureCacheId), Texture.addToCache(renderTexture, textureCacheId);
  const m = _tempMatrix;
  this.transform.localTransform.copyTo(m), m.invert(), m.tx -= bounds.x, m.ty -= bounds.y, this.renderCanvas = this._cacheData.originalRenderCanvas, renderer.render(this, { renderTexture, clear: true, transform: m, skipUpdateTransform: false }), renderer.canvasContext.activeContext = cachedRenderTarget, renderer._projTransform = cachedProjectionTransform, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = cacheAlpha;
  const cachedSprite = new Sprite(renderTexture);
  cachedSprite.transform.worldTransform = this.transform.worldTransform, cachedSprite.anchor.x = -(bounds.x / bounds.width), cachedSprite.anchor.y = -(bounds.y / bounds.height), cachedSprite.alpha = cacheAlpha, cachedSprite._bounds = this._bounds, this._cacheData.sprite = cachedSprite, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = renderer._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
};
DisplayObject.prototype._calculateCachedBounds = function() {
  this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
};
DisplayObject.prototype._getCachedLocalBounds = function() {
  return this._cacheData.sprite.getLocalBounds(null);
};
DisplayObject.prototype._destroyCachedDisplayObject = function() {
  this._cacheData.sprite._texture.destroy(true), this._cacheData.sprite = null, BaseTexture.removeFromCache(this._cacheData.textureCacheId), Texture.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
};
DisplayObject.prototype._cacheAsBitmapDestroy = function(options) {
  this.cacheAsBitmap = false, this.destroy(options);
};

// node_modules/@pixi/mixin-get-child-by-name/lib/index.mjs
DisplayObject.prototype.name = null;
Container.prototype.getChildByName = function(name, deep) {
  for (let i = 0, j = this.children.length; i < j; i++)
    if (this.children[i].name === name)
      return this.children[i];
  if (deep)
    for (let i = 0, j = this.children.length; i < j; i++) {
      const child = this.children[i];
      if (!child.getChildByName)
        continue;
      const target = child.getChildByName(name, true);
      if (target)
        return target;
    }
  return null;
};

// node_modules/@pixi/mixin-get-global-position/lib/index.mjs
DisplayObject.prototype.getGlobalPosition = function(point = new Point(), skipUpdate = false) {
  return this.parent ? this.parent.toGlobal(this.position, point, skipUpdate) : (point.x = this.position.x, point.y = this.position.y), point;
};

// node_modules/@pixi/filter-alpha/lib/alpha.frag.mjs
var fragment = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;

// node_modules/@pixi/filter-alpha/lib/AlphaFilter.mjs
var AlphaFilter = class extends Filter {
  /**
   * @param alpha - Amount of alpha from 0 to 1, where 0 is transparent
   */
  constructor(alpha = 1) {
    super(defaultVertex, fragment, { uAlpha: 1 }), this.alpha = alpha;
  }
  /**
   * Coefficient for alpha multiplication
   * @default 1
   */
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(value) {
    this.uniforms.uAlpha = value;
  }
};

// node_modules/@pixi/filter-blur/lib/generateBlurFragSource.mjs
var GAUSSIAN_VALUES = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
};
var fragTemplate = [
  "varying vec2 vBlurTexCoords[%size%];",
  "uniform sampler2D uSampler;",
  "void main(void)",
  "{",
  "    gl_FragColor = vec4(0.0);",
  "    %blur%",
  "}"
].join(`
`);
function generateBlurFragSource(kernelSize) {
  const kernel = GAUSSIAN_VALUES[kernelSize], halfLength = kernel.length;
  let fragSource = fragTemplate, blurLoop = "";
  const template = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let value;
  for (let i = 0; i < kernelSize; i++) {
    let blur = template.replace("%index%", i.toString());
    value = i, i >= halfLength && (value = kernelSize - i - 1), blur = blur.replace("%value%", kernel[value].toString()), blurLoop += blur, blurLoop += `
`;
  }
  return fragSource = fragSource.replace("%blur%", blurLoop), fragSource = fragSource.replace("%size%", kernelSize.toString()), fragSource;
}

// node_modules/@pixi/filter-blur/lib/generateBlurVertSource.mjs
var vertTemplate = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function generateBlurVertSource(kernelSize, x) {
  const halfLength = Math.ceil(kernelSize / 2);
  let vertSource = vertTemplate, blurLoop = "", template;
  x ? template = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : template = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  for (let i = 0; i < kernelSize; i++) {
    let blur = template.replace("%index%", i.toString());
    blur = blur.replace("%sampleIndex%", `${i - (halfLength - 1)}.0`), blurLoop += blur, blurLoop += `
`;
  }
  return vertSource = vertSource.replace("%blur%", blurLoop), vertSource = vertSource.replace("%size%", kernelSize.toString()), vertSource;
}

// node_modules/@pixi/filter-blur/lib/BlurFilterPass.mjs
var BlurFilterPass = class extends Filter {
  /**
   * @param horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
   * @param strength - The strength of the blur filter.
   * @param quality - The quality of the blur filter.
   * @param {number|null} [resolution=PIXI.Filter.defaultResolution] - The resolution of the blur filter.
   * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */
  constructor(horizontal, strength = 8, quality = 4, resolution = Filter.defaultResolution, kernelSize = 5) {
    const vertSrc = generateBlurVertSource(kernelSize, horizontal), fragSrc = generateBlurFragSource(kernelSize);
    super(
      // vertex shader
      vertSrc,
      // fragment shader
      fragSrc
    ), this.horizontal = horizontal, this.resolution = resolution, this._quality = 0, this.quality = quality, this.blur = strength;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */
  apply(filterManager, input, output, clearMode) {
    if (output ? this.horizontal ? this.uniforms.strength = 1 / output.width * (output.width / input.width) : this.uniforms.strength = 1 / output.height * (output.height / input.height) : this.horizontal ? this.uniforms.strength = 1 / filterManager.renderer.width * (filterManager.renderer.width / input.width) : this.uniforms.strength = 1 / filterManager.renderer.height * (filterManager.renderer.height / input.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1)
      filterManager.applyFilter(this, input, output, clearMode);
    else {
      const renderTarget = filterManager.getFilterTexture(), renderer = filterManager.renderer;
      let flip = input, flop = renderTarget;
      this.state.blend = false, filterManager.applyFilter(this, flip, flop, CLEAR_MODES.CLEAR);
      for (let i = 1; i < this.passes - 1; i++) {
        filterManager.bindAndClear(flip, CLEAR_MODES.BLIT), this.uniforms.uSampler = flop;
        const temp = flop;
        flop = flip, flip = temp, renderer.shader.bind(this), renderer.geometry.draw(5);
      }
      this.state.blend = true, filterManager.applyFilter(this, flop, output, clearMode), filterManager.returnFilterTexture(renderTarget);
    }
  }
  /**
   * Sets the strength of both the blur.
   * @default 16
   */
  get blur() {
    return this.strength;
  }
  set blur(value) {
    this.padding = 1 + Math.abs(value) * 2, this.strength = value;
  }
  /**
   * Sets the quality of the blur by modifying the number of passes. More passes means higher
   * quality bluring but the lower the performance.
   * @default 4
   */
  get quality() {
    return this._quality;
  }
  set quality(value) {
    this._quality = value, this.passes = value;
  }
};

// node_modules/@pixi/filter-blur/lib/BlurFilter.mjs
var BlurFilter = class extends Filter {
  /**
   * @param strength - The strength of the blur filter.
   * @param quality - The quality of the blur filter.
   * @param {number|null} [resolution=PIXI.Filter.defaultResolution] - The resolution of the blur filter.
   * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */
  constructor(strength = 8, quality = 4, resolution = Filter.defaultResolution, kernelSize = 5) {
    super(), this._repeatEdgePixels = false, this.blurXFilter = new BlurFilterPass(true, strength, quality, resolution, kernelSize), this.blurYFilter = new BlurFilterPass(false, strength, quality, resolution, kernelSize), this.resolution = resolution, this.quality = quality, this.blur = strength, this.repeatEdgePixels = false;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */
  apply(filterManager, input, output, clearMode) {
    const xStrength = Math.abs(this.blurXFilter.strength), yStrength = Math.abs(this.blurYFilter.strength);
    if (xStrength && yStrength) {
      const renderTarget = filterManager.getFilterTexture();
      this.blurXFilter.apply(filterManager, input, renderTarget, CLEAR_MODES.CLEAR), this.blurYFilter.apply(filterManager, renderTarget, output, clearMode), filterManager.returnFilterTexture(renderTarget);
    } else
      yStrength ? this.blurYFilter.apply(filterManager, input, output, clearMode) : this.blurXFilter.apply(filterManager, input, output, clearMode);
  }
  updatePadding() {
    this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
  }
  /**
   * Sets the strength of both the blurX and blurY properties simultaneously
   * @default 2
   */
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(value) {
    this.blurXFilter.blur = this.blurYFilter.blur = value, this.updatePadding();
  }
  /**
   * Sets the number of passes for blur. More passes means higher quality bluring.
   * @default 1
   */
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(value) {
    this.blurXFilter.quality = this.blurYFilter.quality = value;
  }
  /**
   * Sets the strength of the blurX property
   * @default 2
   */
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(value) {
    this.blurXFilter.blur = value, this.updatePadding();
  }
  /**
   * Sets the strength of the blurY property
   * @default 2
   */
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(value) {
    this.blurYFilter.blur = value, this.updatePadding();
  }
  /**
   * Sets the blendmode of the filter
   * @default PIXI.BLEND_MODES.NORMAL
   */
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(value) {
    this.blurYFilter.blendMode = value;
  }
  /**
   * If set to true the edge of the target will be clamped
   * @default false
   */
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(value) {
    this._repeatEdgePixels = value, this.updatePadding();
  }
};

// node_modules/@pixi/filter-color-matrix/lib/colorMatrix.frag.mjs
var fragment2 = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;

// node_modules/@pixi/filter-color-matrix/lib/ColorMatrixFilter.mjs
var ColorMatrixFilter = class extends Filter {
  constructor() {
    const uniforms = {
      m: new Float32Array([
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]),
      uAlpha: 1
    };
    super(defaultFilterVertex, fragment2, uniforms), this.alpha = 1;
  }
  /**
   * Transforms current matrix and set the new one
   * @param {number[]} matrix - 5x4 matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  _loadMatrix(matrix, multiply = false) {
    let newMatrix = matrix;
    multiply && (this._multiply(newMatrix, this.uniforms.m, matrix), newMatrix = this._colorMatrix(newMatrix)), this.uniforms.m = newMatrix;
  }
  /**
   * Multiplies two mat5's
   * @private
   * @param out - 5x4 matrix the receiving matrix
   * @param a - 5x4 matrix the first operand
   * @param b - 5x4 matrix the second operand
   * @returns {number[]} 5x4 matrix
   */
  _multiply(out, a, b) {
    return out[0] = a[0] * b[0] + a[1] * b[5] + a[2] * b[10] + a[3] * b[15], out[1] = a[0] * b[1] + a[1] * b[6] + a[2] * b[11] + a[3] * b[16], out[2] = a[0] * b[2] + a[1] * b[7] + a[2] * b[12] + a[3] * b[17], out[3] = a[0] * b[3] + a[1] * b[8] + a[2] * b[13] + a[3] * b[18], out[4] = a[0] * b[4] + a[1] * b[9] + a[2] * b[14] + a[3] * b[19] + a[4], out[5] = a[5] * b[0] + a[6] * b[5] + a[7] * b[10] + a[8] * b[15], out[6] = a[5] * b[1] + a[6] * b[6] + a[7] * b[11] + a[8] * b[16], out[7] = a[5] * b[2] + a[6] * b[7] + a[7] * b[12] + a[8] * b[17], out[8] = a[5] * b[3] + a[6] * b[8] + a[7] * b[13] + a[8] * b[18], out[9] = a[5] * b[4] + a[6] * b[9] + a[7] * b[14] + a[8] * b[19] + a[9], out[10] = a[10] * b[0] + a[11] * b[5] + a[12] * b[10] + a[13] * b[15], out[11] = a[10] * b[1] + a[11] * b[6] + a[12] * b[11] + a[13] * b[16], out[12] = a[10] * b[2] + a[11] * b[7] + a[12] * b[12] + a[13] * b[17], out[13] = a[10] * b[3] + a[11] * b[8] + a[12] * b[13] + a[13] * b[18], out[14] = a[10] * b[4] + a[11] * b[9] + a[12] * b[14] + a[13] * b[19] + a[14], out[15] = a[15] * b[0] + a[16] * b[5] + a[17] * b[10] + a[18] * b[15], out[16] = a[15] * b[1] + a[16] * b[6] + a[17] * b[11] + a[18] * b[16], out[17] = a[15] * b[2] + a[16] * b[7] + a[17] * b[12] + a[18] * b[17], out[18] = a[15] * b[3] + a[16] * b[8] + a[17] * b[13] + a[18] * b[18], out[19] = a[15] * b[4] + a[16] * b[9] + a[17] * b[14] + a[18] * b[19] + a[19], out;
  }
  /**
   * Create a Float32 Array and normalize the offset component to 0-1
   * @param {number[]} matrix - 5x4 matrix
   * @returns {number[]} 5x4 matrix with all values between 0-1
   */
  _colorMatrix(matrix) {
    const m = new Float32Array(matrix);
    return m[4] /= 255, m[9] /= 255, m[14] /= 255, m[19] /= 255, m;
  }
  /**
   * Adjusts brightness
   * @param b - value of the brigthness (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  brightness(b, multiply) {
    const matrix = [
      b,
      0,
      0,
      0,
      0,
      0,
      b,
      0,
      0,
      0,
      0,
      0,
      b,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Sets each channel on the diagonal of the color matrix.
   * This can be used to achieve a tinting effect on Containers similar to the tint field of some
   * display objects like Sprite, Text, Graphics, and Mesh.
   * @param color - Color of the tint. This is a hex value.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  tint(color, multiply) {
    const [r, g, b] = Color.shared.setValue(color).toArray(), matrix = [
      r,
      0,
      0,
      0,
      0,
      0,
      g,
      0,
      0,
      0,
      0,
      0,
      b,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the matrices in grey scales
   * @param scale - value of the grey (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  greyscale(scale, multiply) {
    const matrix = [
      scale,
      scale,
      scale,
      0,
      0,
      scale,
      scale,
      scale,
      0,
      0,
      scale,
      scale,
      scale,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the black and white matrice.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  blackAndWhite(multiply) {
    const matrix = [
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the hue property of the color
   * @param rotation - in degrees
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  hue(rotation, multiply) {
    rotation = (rotation || 0) / 180 * Math.PI;
    const cosR = Math.cos(rotation), sinR = Math.sin(rotation), sqrt = Math.sqrt, w = 1 / 3, sqrW = sqrt(w), a00 = cosR + (1 - cosR) * w, a01 = w * (1 - cosR) - sqrW * sinR, a02 = w * (1 - cosR) + sqrW * sinR, a10 = w * (1 - cosR) + sqrW * sinR, a11 = cosR + w * (1 - cosR), a12 = w * (1 - cosR) - sqrW * sinR, a20 = w * (1 - cosR) - sqrW * sinR, a21 = w * (1 - cosR) + sqrW * sinR, a22 = cosR + w * (1 - cosR), matrix = [
      a00,
      a01,
      a02,
      0,
      0,
      a10,
      a11,
      a12,
      0,
      0,
      a20,
      a21,
      a22,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the contrast matrix, increase the separation between dark and bright
   * Increase contrast : shadows darker and highlights brighter
   * Decrease contrast : bring the shadows up and the highlights down
   * @param amount - value of the contrast (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  contrast(amount, multiply) {
    const v = (amount || 0) + 1, o = -0.5 * (v - 1), matrix = [
      v,
      0,
      0,
      0,
      o,
      0,
      v,
      0,
      0,
      o,
      0,
      0,
      v,
      0,
      o,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Set the saturation matrix, increase the separation between colors
   * Increase saturation : increase contrast, brightness, and sharpness
   * @param amount - The saturation amount (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  saturate(amount = 0, multiply) {
    const x = amount * 2 / 3 + 1, y = (x - 1) * -0.5, matrix = [
      x,
      y,
      y,
      0,
      0,
      y,
      x,
      y,
      0,
      0,
      y,
      y,
      x,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /** Desaturate image (remove color) Call the saturate function */
  desaturate() {
    this.saturate(-1);
  }
  /**
   * Negative image (inverse of classic rgb matrix)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  negative(multiply) {
    const matrix = [
      -1,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      -1,
      1,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Sepia image
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  sepia(multiply) {
    const matrix = [
      0.393,
      0.7689999,
      0.18899999,
      0,
      0,
      0.349,
      0.6859999,
      0.16799999,
      0,
      0,
      0.272,
      0.5339999,
      0.13099999,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  technicolor(multiply) {
    const matrix = [
      1.9125277891456083,
      -0.8545344976951645,
      -0.09155508482755585,
      0,
      11.793603434377337,
      -0.3087833385928097,
      1.7658908555458428,
      -0.10601743074722245,
      0,
      -70.35205161461398,
      -0.231103377548616,
      -0.7501899197440212,
      1.847597816108189,
      0,
      30.950940869491138,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Polaroid filter
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  polaroid(multiply) {
    const matrix = [
      1.438,
      -0.062,
      -0.062,
      0,
      0,
      -0.122,
      1.378,
      -0.122,
      0,
      0,
      -0.016,
      -0.016,
      1.483,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Filter who transforms : Red -> Blue and Blue -> Red
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  toBGR(multiply) {
    const matrix = [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  kodachrome(multiply) {
    const matrix = [
      1.1285582396593525,
      -0.3967382283601348,
      -0.03992559172921793,
      0,
      63.72958762196502,
      -0.16404339962244616,
      1.0835251566291304,
      -0.05498805115633132,
      0,
      24.732407896706203,
      -0.16786010706155763,
      -0.5603416277695248,
      1.6014850761964943,
      0,
      35.62982807460946,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Brown delicious browni filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  browni(multiply) {
    const matrix = [
      0.5997023498159715,
      0.34553243048391263,
      -0.2708298674538042,
      0,
      47.43192855600873,
      -0.037703249837783157,
      0.8609577587992641,
      0.15059552388459913,
      0,
      -36.96841498319127,
      0.24113635128153335,
      -0.07441037908422492,
      0.44972182064877153,
      0,
      -7.562075277591283,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Vintage filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  vintage(multiply) {
    const matrix = [
      0.6279345635605994,
      0.3202183420819367,
      -0.03965408211312453,
      0,
      9.651285835294123,
      0.02578397704808868,
      0.6441188644374771,
      0.03259127616149294,
      0,
      7.462829176470591,
      0.0466055556782719,
      -0.0851232987247891,
      0.5241648018700465,
      0,
      5.159190588235296,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * We don't know exactly what it does, kind of gradient map, but funny to play with!
   * @param desaturation - Tone values.
   * @param toned - Tone values.
   * @param lightColor - Tone values, example: `0xFFE580`
   * @param darkColor - Tone values, example: `0xFFE580`
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  colorTone(desaturation, toned, lightColor, darkColor, multiply) {
    desaturation = desaturation || 0.2, toned = toned || 0.15, lightColor = lightColor || 16770432, darkColor = darkColor || 3375104;
    const temp = Color.shared, [lR, lG, lB] = temp.setValue(lightColor).toArray(), [dR, dG, dB] = temp.setValue(darkColor).toArray(), matrix = [
      0.3,
      0.59,
      0.11,
      0,
      0,
      lR,
      lG,
      lB,
      desaturation,
      0,
      dR,
      dG,
      dB,
      toned,
      0,
      lR - dR,
      lG - dG,
      lB - dB,
      0,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Night effect
   * @param intensity - The intensity of the night effect.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  night(intensity, multiply) {
    intensity = intensity || 0.1;
    const matrix = [
      intensity * -2,
      -intensity,
      0,
      0,
      0,
      -intensity,
      0,
      intensity,
      0,
      0,
      0,
      intensity,
      intensity * 2,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * Predator effect
   *
   * Erase the current matrix by setting a new indepent one
   * @param amount - how much the predator feels his future victim
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  predator(amount, multiply) {
    const matrix = [
      // row 1
      11.224130630493164 * amount,
      -4.794486999511719 * amount,
      -2.8746118545532227 * amount,
      0 * amount,
      0.40342438220977783 * amount,
      // row 2
      -3.6330697536468506 * amount,
      9.193157196044922 * amount,
      -2.951810836791992 * amount,
      0 * amount,
      -1.316135048866272 * amount,
      // row 3
      -3.2184197902679443 * amount,
      -4.2375030517578125 * amount,
      7.476448059082031 * amount,
      0 * amount,
      0.8044459223747253 * amount,
      // row 4
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /**
   * LSD effect
   *
   * Multiply the current matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  lsd(multiply) {
    const matrix = [
      2,
      -0.4,
      0.5,
      0,
      0,
      -0.5,
      2,
      -0.4,
      0,
      0,
      -0.4,
      -0.5,
      3,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, multiply);
  }
  /** Erase the current matrix by setting the default one. */
  reset() {
    const matrix = [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(matrix, false);
  }
  /**
   * The matrix of the color matrix filter
   * @member {number[]}
   * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
   */
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(value) {
    this.uniforms.m = value;
  }
  /**
   * The opacity value to use when mixing the original and resultant colors.
   *
   * When the value is 0, the original color is used without modification.
   * When the value is 1, the result color is used.
   * When in the range (0, 1) the color is interpolated between the original and result by this amount.
   * @default 1
   */
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(value) {
    this.uniforms.uAlpha = value;
  }
};
ColorMatrixFilter.prototype.grayscale = ColorMatrixFilter.prototype.greyscale;

// node_modules/@pixi/filter-displacement/lib/displacement.frag.mjs
var fragment3 = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`;

// node_modules/@pixi/filter-displacement/lib/displacement.vert.mjs
var vertex = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;

// node_modules/@pixi/filter-displacement/lib/DisplacementFilter.mjs
var DisplacementFilter = class extends Filter {
  /**
   * @param {PIXI.Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
   * @param scale - The scale of the displacement
   */
  constructor(sprite, scale) {
    const maskMatrix = new Matrix();
    sprite.renderable = false, super(vertex, fragment3, {
      mapSampler: sprite._texture,
      filterMatrix: maskMatrix,
      scale: { x: 1, y: 1 },
      rotation: new Float32Array([1, 0, 0, 1])
    }), this.maskSprite = sprite, this.maskMatrix = maskMatrix, scale == null && (scale = 20), this.scale = new Point(scale, scale);
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - clearMode.
   */
  apply(filterManager, input, output, clearMode) {
    this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
    const wt = this.maskSprite.worldTransform, lenX = Math.sqrt(wt.a * wt.a + wt.b * wt.b), lenY = Math.sqrt(wt.c * wt.c + wt.d * wt.d);
    lenX !== 0 && lenY !== 0 && (this.uniforms.rotation[0] = wt.a / lenX, this.uniforms.rotation[1] = wt.b / lenX, this.uniforms.rotation[2] = wt.c / lenY, this.uniforms.rotation[3] = wt.d / lenY), filterManager.applyFilter(this, input, output, clearMode);
  }
  /** The texture used for the displacement map. Must be power of 2 sized texture. */
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(value) {
    this.uniforms.mapSampler = value;
  }
};

// node_modules/@pixi/filter-fxaa/lib/fxaa.frag.mjs
var fragment4 = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;

// node_modules/@pixi/filter-fxaa/lib/fxaa.vert.mjs
var vertex2 = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;

// node_modules/@pixi/filter-fxaa/lib/FXAAFilter.mjs
var FXAAFilter = class extends Filter {
  constructor() {
    super(vertex2, fragment4);
  }
};

// node_modules/@pixi/filter-noise/lib/noise.frag.mjs
var fragment5 = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;

// node_modules/@pixi/filter-noise/lib/NoiseFilter.mjs
var NoiseFilter = class extends Filter {
  /**
   * @param {number} [noise=0.5] - The noise intensity, should be a normalized value in the range [0, 1].
   * @param {number} [seed] - A random seed for the noise generation. Default is `Math.random()`.
   */
  constructor(noise = 0.5, seed = Math.random()) {
    super(defaultFilterVertex, fragment5, {
      uNoise: 0,
      uSeed: 0
    }), this.noise = noise, this.seed = seed;
  }
  /**
   * The amount of noise to apply, this value should be in the range (0, 1].
   * @default 0.5
   */
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(value) {
    this.uniforms.uNoise = value;
  }
  /** A seed value to apply to the random noise generation. `Math.random()` is a good value to use. */
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(value) {
    this.uniforms.uSeed = value;
  }
};

// node_modules/pixi.js/lib/filters.mjs
var filters = {
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.AlphaFilter
   */
  AlphaFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilter
   */
  BlurFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilterPass
   */
  BlurFilterPass,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.ColorMatrixFilter
   */
  ColorMatrixFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.DisplacementFilter
   */
  DisplacementFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.FXAAFilter
   */
  FXAAFilter,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.NoiseFilter
   */
  NoiseFilter
};
Object.entries(filters).forEach(([key, FilterClass]) => {
  Object.defineProperty(filters, key, {
    get() {
      return lib_exports.deprecation("7.1.0", `filters.${key} has moved to ${key}`), FilterClass;
    }
  });
});

// node_modules/@pixi/events/lib/EventTicker.mjs
var EventsTickerClass = class {
  constructor() {
    this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = false, this.tickerAdded = false, this._pauseUpdate = true;
  }
  /**
   * Initializes the event ticker.
   * @param events - The event system.
   */
  init(events) {
    this.removeTickerListener(), this.events = events, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = false, this.tickerAdded = false, this._pauseUpdate = true;
  }
  /** Whether to pause the update checks or not. */
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(paused) {
    this._pauseUpdate = paused;
  }
  /** Adds the ticker listener. */
  addTickerListener() {
    this.tickerAdded || !this.domElement || (Ticker.system.add(this.tickerUpdate, this, UPDATE_PRIORITY.INTERACTION), this.tickerAdded = true);
  }
  /** Removes the ticker listener. */
  removeTickerListener() {
    this.tickerAdded && (Ticker.system.remove(this.tickerUpdate, this), this.tickerAdded = false);
  }
  /** Sets flag to not fire extra events when the user has already moved there mouse */
  pointerMoved() {
    this._didMove = true;
  }
  /** Updates the state of interactive objects. */
  update() {
    if (!this.domElement || this._pauseUpdate)
      return;
    if (this._didMove) {
      this._didMove = false;
      return;
    }
    const rootPointerEvent = this.events.rootPointerEvent;
    this.events.supportsTouchEvents && rootPointerEvent.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
      clientX: rootPointerEvent.clientX,
      clientY: rootPointerEvent.clientY
    }));
  }
  /**
   * Updates the state of interactive objects if at least {@link PIXI.EventsTicker#interactionFrequency}
   * milliseconds have passed since the last invocation.
   *
   * Invoked by a throttled ticker update from {@link PIXI.Ticker.system}.
   * @param deltaTime - time delta since the last call
   */
  tickerUpdate(deltaTime) {
    this._deltaTime += deltaTime, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.update());
  }
};
var EventsTicker = new EventsTickerClass();

// node_modules/@pixi/events/lib/FederatedEvent.mjs
var FederatedEvent = class _FederatedEvent {
  /**
   * @param manager - The event boundary which manages this event. Propagation can only occur
   *  within the boundary's jurisdiction.
   */
  constructor(manager) {
    this.bubbles = true, this.cancelBubble = true, this.cancelable = false, this.composed = false, this.defaultPrevented = false, this.eventPhase = _FederatedEvent.prototype.NONE, this.propagationStopped = false, this.propagationImmediatelyStopped = false, this.layer = new Point(), this.page = new Point(), this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = manager;
  }
  /** @readonly */
  get layerX() {
    return this.layer.x;
  }
  /** @readonly */
  get layerY() {
    return this.layer.y;
  }
  /** @readonly */
  get pageX() {
    return this.page.x;
  }
  /** @readonly */
  get pageY() {
    return this.page.y;
  }
  /**
   * Fallback for the deprecated @code{PIXI.InteractionEvent.data}.
   * @deprecated since 7.0.0
   */
  get data() {
    return this;
  }
  /** The propagation path for this event. Alias for {@link PIXI.EventBoundary.propagationPath}. */
  composedPath() {
    return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
  }
  /**
   * Unimplemented method included for implementing the DOM interface {@code Event}. It will throw an {@code Error}.
   * @deprecated
   * @param _type
   * @param _bubbles
   * @param _cancelable
   */
  initEvent(_type, _bubbles, _cancelable) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  /**
   * Unimplemented method included for implementing the DOM interface {@code UIEvent}. It will throw an {@code Error}.
   * @deprecated
   * @param _typeArg
   * @param _bubblesArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   */
  initUIEvent(_typeArg, _bubblesArg, _cancelableArg, _viewArg, _detailArg) {
    throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  /** Prevent default behavior of PixiJS and the user agent. */
  preventDefault() {
    this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = true;
  }
  /**
   * Stop this event from propagating to any addition listeners, including on the
   * {@link PIXI.FederatedEventTarget.currentTarget currentTarget} and also the following
   * event targets on the propagation path.
   */
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = true;
  }
  /**
   * Stop this event from propagating to the next {@link PIXI.FederatedEventTarget}. The rest of the listeners
   * on the {@link PIXI.FederatedEventTarget.currentTarget currentTarget} will still be notified.
   */
  stopPropagation() {
    this.propagationStopped = true;
  }
};

// node_modules/@pixi/events/lib/FederatedMouseEvent.mjs
var FederatedMouseEvent = class extends FederatedEvent {
  constructor() {
    super(...arguments), this.client = new Point(), this.movement = new Point(), this.offset = new Point(), this.global = new Point(), this.screen = new Point();
  }
  /** @readonly */
  get clientX() {
    return this.client.x;
  }
  /** @readonly */
  get clientY() {
    return this.client.y;
  }
  /**
   * Alias for {@link PIXI.FederatedMouseEvent.clientX this.clientX}.
   * @readonly
   */
  get x() {
    return this.clientX;
  }
  /**
   * Alias for {@link PIXI.FederatedMouseEvent.clientY this.clientY}.
   * @readonly
   */
  get y() {
    return this.clientY;
  }
  /** @readonly */
  get movementX() {
    return this.movement.x;
  }
  /** @readonly */
  get movementY() {
    return this.movement.y;
  }
  /** @readonly */
  get offsetX() {
    return this.offset.x;
  }
  /** @readonly */
  get offsetY() {
    return this.offset.y;
  }
  /** @readonly */
  get globalX() {
    return this.global.x;
  }
  /** @readonly */
  get globalY() {
    return this.global.y;
  }
  /**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.x}.
   * @readonly
   */
  get screenX() {
    return this.screen.x;
  }
  /**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.y}.
   * @readonly
   */
  get screenY() {
    return this.screen.y;
  }
  /**
   * This will return the local coordinates of the specified displayObject for this InteractionData
   * @param {PIXI.DisplayObject} displayObject - The DisplayObject that you would like the local
   *  coords off
   * @param {PIXI.IPointData} point - A Point object in which to store the value, optional (otherwise
   *  will create a new point)
   * @param {PIXI.IPointData} globalPos - A Point object containing your custom global coords, optional
   *  (otherwise will use the current global coords)
   * @returns - A point containing the coordinates of the InteractionData position relative
   *  to the DisplayObject
   */
  getLocalPosition(displayObject, point, globalPos) {
    return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
  }
  /**
   * Whether the modifier key was pressed when this event natively occurred.
   * @param key - The modifier key.
   */
  getModifierState(key) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(key);
  }
  /**
   * Not supported.
   * @param _typeArg
   * @param _canBubbleArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   * @param _screenXArg
   * @param _screenYArg
   * @param _clientXArg
   * @param _clientYArg
   * @param _ctrlKeyArg
   * @param _altKeyArg
   * @param _shiftKeyArg
   * @param _metaKeyArg
   * @param _buttonArg
   * @param _relatedTargetArg
   * @deprecated since 7.0.0
   */
  // eslint-disable-next-line max-params
  initMouseEvent(_typeArg, _canBubbleArg, _cancelableArg, _viewArg, _detailArg, _screenXArg, _screenYArg, _clientXArg, _clientYArg, _ctrlKeyArg, _altKeyArg, _shiftKeyArg, _metaKeyArg, _buttonArg, _relatedTargetArg) {
    throw new Error("Method not implemented.");
  }
};

// node_modules/@pixi/events/lib/FederatedPointerEvent.mjs
var FederatedPointerEvent = class extends FederatedMouseEvent {
  constructor() {
    super(...arguments), this.width = 0, this.height = 0, this.isPrimary = false;
  }
  // Only included for completeness for now
  getCoalescedEvents() {
    return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : [];
  }
  // Only included for completeness for now
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
};

// node_modules/@pixi/events/lib/FederatedWheelEvent.mjs
var FederatedWheelEvent = class extends FederatedMouseEvent {
  constructor() {
    super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2;
  }
};
FederatedWheelEvent.DOM_DELTA_PIXEL = 0, /** Units specified in lines. */
FederatedWheelEvent.DOM_DELTA_LINE = 1, /** Units specified in pages. */
FederatedWheelEvent.DOM_DELTA_PAGE = 2;

// node_modules/@pixi/events/lib/EventBoundary.mjs
var PROPAGATION_LIMIT = 2048;
var tempHitLocation = new Point();
var tempLocalMapping = new Point();
var EventBoundary = class {
  /**
   * @param rootTarget - The holder of the event boundary.
   */
  constructor(rootTarget) {
    this.dispatch = new lib_exports.EventEmitter(), this.moveOnAll = false, this.enableGlobalMoveEvents = true, this.mappingState = {
      trackingData: {}
    }, this.eventPool = /* @__PURE__ */ new Map(), this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = false, this.rootTarget = rootTarget, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
  }
  /**
   * Adds an event mapping for the event `type` handled by `fn`.
   *
   * Event mappings can be used to implement additional or custom events. They take an event
   * coming from the upstream scene (or directly from the {@link PIXI.EventSystem}) and dispatch new downstream events
   * generally trickling down and bubbling up to {@link PIXI.EventBoundary.rootTarget this.rootTarget}.
   *
   * To modify the semantics of existing events, the built-in mapping methods of EventBoundary should be overridden
   * instead.
   * @param type - The type of upstream event to map.
   * @param fn - The mapping method. The context of this function must be bound manually, if desired.
   */
  addEventMapping(type, fn) {
    this.mappingTable[type] || (this.mappingTable[type] = []), this.mappingTable[type].push({
      fn,
      priority: 0
    }), this.mappingTable[type].sort((a, b) => a.priority - b.priority);
  }
  /**
   * Dispatches the given event
   * @param e
   * @param type
   */
  dispatchEvent(e, type) {
    e.propagationStopped = false, e.propagationImmediatelyStopped = false, this.propagate(e, type), this.dispatch.emit(type || e.type, e);
  }
  /**
   * Maps the given upstream event through the event boundary and propagates it downstream.
   * @param e
   */
  mapEvent(e) {
    if (!this.rootTarget)
      return;
    const mappers = this.mappingTable[e.type];
    if (mappers)
      for (let i = 0, j = mappers.length; i < j; i++)
        mappers[i].fn(e);
    else
      console.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`);
  }
  /**
   * Finds the DisplayObject that is the target of a event at the given coordinates.
   *
   * The passed (x,y) coordinates are in the world space above this event boundary.
   * @param x
   * @param y
   */
  hitTest(x, y) {
    EventsTicker.pauseUpdate = true;
    const fn = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", invertedPath = this[fn](
      this.rootTarget,
      this.rootTarget.eventMode,
      tempHitLocation.set(x, y),
      this.hitTestFn,
      this.hitPruneFn
    );
    return invertedPath && invertedPath[0];
  }
  /**
   * Propagate the passed event from from {@link PIXI.EventBoundary.rootTarget this.rootTarget} to its
   * target {@code e.target}.
   * @param e - The event to propagate.
   * @param type
   */
  propagate(e, type) {
    if (!e.target)
      return;
    const composedPath = e.composedPath();
    e.eventPhase = e.CAPTURING_PHASE;
    for (let i = 0, j = composedPath.length - 1; i < j; i++)
      if (e.currentTarget = composedPath[i], this.notifyTarget(e, type), e.propagationStopped || e.propagationImmediatelyStopped)
        return;
    if (e.eventPhase = e.AT_TARGET, e.currentTarget = e.target, this.notifyTarget(e, type), !(e.propagationStopped || e.propagationImmediatelyStopped)) {
      e.eventPhase = e.BUBBLING_PHASE;
      for (let i = composedPath.length - 2; i >= 0; i--)
        if (e.currentTarget = composedPath[i], this.notifyTarget(e, type), e.propagationStopped || e.propagationImmediatelyStopped)
          return;
    }
  }
  /**
   * Emits the event {@code e} to all interactive display objects. The event is propagated in the bubbling phase always.
   *
   * This is used in the `globalpointermove` event.
   * @param e - The emitted event.
   * @param type - The listeners to notify.
   * @param targets - The targets to notify.
   */
  all(e, type, targets = this._allInteractiveElements) {
    if (targets.length === 0)
      return;
    e.eventPhase = e.BUBBLING_PHASE;
    const events = Array.isArray(type) ? type : [type];
    for (let i = targets.length - 1; i >= 0; i--)
      events.forEach((event) => {
        e.currentTarget = targets[i], this.notifyTarget(e, event);
      });
  }
  /**
   * Finds the propagation path from {@link PIXI.EventBoundary.rootTarget rootTarget} to the passed
   * {@code target}. The last element in the path is {@code target}.
   * @param target
   */
  propagationPath(target) {
    const propagationPath = [target];
    for (let i = 0; i < PROPAGATION_LIMIT && target !== this.rootTarget; i++) {
      if (!target.parent)
        throw new Error("Cannot find propagation path to disconnected target");
      propagationPath.push(target.parent), target = target.parent;
    }
    return propagationPath.reverse(), propagationPath;
  }
  hitTestMoveRecursive(currentTarget, eventMode, location, testFn, pruneFn, ignore = false) {
    let shouldReturn = false;
    if (this._interactivePrune(currentTarget))
      return null;
    if ((currentTarget.eventMode === "dynamic" || eventMode === "dynamic") && (EventsTicker.pauseUpdate = false), currentTarget.interactiveChildren && currentTarget.children) {
      const children = currentTarget.children;
      for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i], nestedHit = this.hitTestMoveRecursive(
          child,
          this._isInteractive(eventMode) ? eventMode : child.eventMode,
          location,
          testFn,
          pruneFn,
          ignore || pruneFn(currentTarget, location)
        );
        if (nestedHit) {
          if (nestedHit.length > 0 && !nestedHit[nestedHit.length - 1].parent)
            continue;
          const isInteractive = currentTarget.isInteractive();
          (nestedHit.length > 0 || isInteractive) && (isInteractive && this._allInteractiveElements.push(currentTarget), nestedHit.push(currentTarget)), this._hitElements.length === 0 && (this._hitElements = nestedHit), shouldReturn = true;
        }
      }
    }
    const isInteractiveMode = this._isInteractive(eventMode), isInteractiveTarget = currentTarget.isInteractive();
    return isInteractiveMode && isInteractiveTarget && this._allInteractiveElements.push(currentTarget), ignore || this._hitElements.length > 0 ? null : shouldReturn ? this._hitElements : isInteractiveMode && !pruneFn(currentTarget, location) && testFn(currentTarget, location) ? isInteractiveTarget ? [currentTarget] : [] : null;
  }
  /**
   * Recursive implementation for {@link PIXI.EventBoundary.hitTest hitTest}.
   * @param currentTarget - The DisplayObject that is to be hit tested.
   * @param eventMode - The event mode for the `currentTarget` or one of its parents.
   * @param location - The location that is being tested for overlap.
   * @param testFn - Callback that determines whether the target passes hit testing. This callback
   *  can assume that `pruneFn` failed to prune the display object.
   * @param pruneFn - Callback that determiness whether the target and all of its children
   *  cannot pass the hit test. It is used as a preliminary optimization to prune entire subtrees
   *  of the scene graph.
   * @returns An array holding the hit testing target and all its ancestors in order. The first element
   *  is the target itself and the last is {@link PIXI.EventBoundary.rootTarget rootTarget}. This is the opposite
   *  order w.r.t. the propagation path. If no hit testing target is found, null is returned.
   */
  hitTestRecursive(currentTarget, eventMode, location, testFn, pruneFn) {
    if (this._interactivePrune(currentTarget) || pruneFn(currentTarget, location))
      return null;
    if ((currentTarget.eventMode === "dynamic" || eventMode === "dynamic") && (EventsTicker.pauseUpdate = false), currentTarget.interactiveChildren && currentTarget.children) {
      const children = currentTarget.children;
      for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i], nestedHit = this.hitTestRecursive(
          child,
          this._isInteractive(eventMode) ? eventMode : child.eventMode,
          location,
          testFn,
          pruneFn
        );
        if (nestedHit) {
          if (nestedHit.length > 0 && !nestedHit[nestedHit.length - 1].parent)
            continue;
          const isInteractive = currentTarget.isInteractive();
          return (nestedHit.length > 0 || isInteractive) && nestedHit.push(currentTarget), nestedHit;
        }
      }
    }
    const isInteractiveMode = this._isInteractive(eventMode), isInteractiveTarget = currentTarget.isInteractive();
    return isInteractiveMode && testFn(currentTarget, location) ? isInteractiveTarget ? [currentTarget] : [] : null;
  }
  _isInteractive(int) {
    return int === "static" || int === "dynamic";
  }
  _interactivePrune(displayObject) {
    return !!(!displayObject || displayObject.isMask || !displayObject.visible || !displayObject.renderable || displayObject.eventMode === "none" || displayObject.eventMode === "passive" && !displayObject.interactiveChildren || displayObject.isMask);
  }
  /**
   * Checks whether the display object or any of its children cannot pass the hit test at all.
   *
   * {@link PIXI.EventBoundary}'s implementation uses the {@link PIXI.DisplayObject.hitArea hitArea}
   * and {@link PIXI.DisplayObject._mask} for pruning.
   * @param displayObject
   * @param location
   */
  hitPruneFn(displayObject, location) {
    var _a;
    if (displayObject.hitArea && (displayObject.worldTransform.applyInverse(location, tempLocalMapping), !displayObject.hitArea.contains(tempLocalMapping.x, tempLocalMapping.y)))
      return true;
    if (displayObject._mask) {
      const maskObject = displayObject._mask.isMaskData ? displayObject._mask.maskObject : displayObject._mask;
      if (maskObject && !((_a = maskObject.containsPoint) == null ? void 0 : _a.call(maskObject, location)))
        return true;
    }
    return false;
  }
  /**
   * Checks whether the display object passes hit testing for the given location.
   * @param displayObject
   * @param location
   * @returns - Whether `displayObject` passes hit testing for `location`.
   */
  hitTestFn(displayObject, location) {
    return displayObject.eventMode === "passive" ? false : displayObject.hitArea ? true : displayObject.containsPoint ? displayObject.containsPoint(location) : false;
  }
  /**
   * Notify all the listeners to the event's `currentTarget`.
   *
   * If the `currentTarget` contains the property `on<type>`, then it is called here,
   * simulating the behavior from version 6.x and prior.
   * @param e - The event passed to the target.
   * @param type
   */
  notifyTarget(e, type) {
    var _a, _b;
    type = type ?? e.type;
    const handlerKey = `on${type}`;
    (_b = (_a = e.currentTarget)[handlerKey]) == null ? void 0 : _b.call(_a, e);
    const key = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${type}capture` : type;
    this.notifyListeners(e, key), e.eventPhase === e.AT_TARGET && this.notifyListeners(e, type);
  }
  /**
   * Maps the upstream `pointerdown` events to a downstream `pointerdown` event.
   *
   * `touchstart`, `rightdown`, `mousedown` events are also dispatched for specific pointer types.
   * @param from
   */
  mapPointerDown(from) {
    if (!(from instanceof FederatedPointerEvent)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.createPointerEvent(from);
    if (this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch")
      this.dispatchEvent(e, "touchstart");
    else if (e.pointerType === "mouse" || e.pointerType === "pen") {
      const isRightButton = e.button === 2;
      this.dispatchEvent(e, isRightButton ? "rightdown" : "mousedown");
    }
    const trackingData = this.trackingData(from.pointerId);
    trackingData.pressTargetsByButton[from.button] = e.composedPath(), this.freeEvent(e);
  }
  /**
   * Maps the upstream `pointermove` to downstream `pointerout`, `pointerover`, and `pointermove` events, in that order.
   *
   * The tracking data for the specific pointer has an updated `overTarget`. `mouseout`, `mouseover`,
   * `mousemove`, and `touchmove` events are fired as well for specific pointer types.
   * @param from - The upstream `pointermove` event.
   */
  mapPointerMove(from) {
    var _a, _b;
    if (!(from instanceof FederatedPointerEvent)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = true;
    const e = this.createPointerEvent(from);
    this._isPointerMoveEvent = false;
    const isMouse = e.pointerType === "mouse" || e.pointerType === "pen", trackingData = this.trackingData(from.pointerId), outTarget = this.findMountedTarget(trackingData.overTargets);
    if (((_a = trackingData.overTargets) == null ? void 0 : _a.length) > 0 && outTarget !== e.target) {
      const outType = from.type === "mousemove" ? "mouseout" : "pointerout", outEvent = this.createPointerEvent(from, outType, outTarget);
      if (this.dispatchEvent(outEvent, "pointerout"), isMouse && this.dispatchEvent(outEvent, "mouseout"), !e.composedPath().includes(outTarget)) {
        const leaveEvent = this.createPointerEvent(from, "pointerleave", outTarget);
        for (leaveEvent.eventPhase = leaveEvent.AT_TARGET; leaveEvent.target && !e.composedPath().includes(leaveEvent.target); )
          leaveEvent.currentTarget = leaveEvent.target, this.notifyTarget(leaveEvent), isMouse && this.notifyTarget(leaveEvent, "mouseleave"), leaveEvent.target = leaveEvent.target.parent;
        this.freeEvent(leaveEvent);
      }
      this.freeEvent(outEvent);
    }
    if (outTarget !== e.target) {
      const overType = from.type === "mousemove" ? "mouseover" : "pointerover", overEvent = this.clonePointerEvent(e, overType);
      this.dispatchEvent(overEvent, "pointerover"), isMouse && this.dispatchEvent(overEvent, "mouseover");
      let overTargetAncestor = outTarget == null ? void 0 : outTarget.parent;
      for (; overTargetAncestor && overTargetAncestor !== this.rootTarget.parent && overTargetAncestor !== e.target; )
        overTargetAncestor = overTargetAncestor.parent;
      if (!overTargetAncestor || overTargetAncestor === this.rootTarget.parent) {
        const enterEvent = this.clonePointerEvent(e, "pointerenter");
        for (enterEvent.eventPhase = enterEvent.AT_TARGET; enterEvent.target && enterEvent.target !== outTarget && enterEvent.target !== this.rootTarget.parent; )
          enterEvent.currentTarget = enterEvent.target, this.notifyTarget(enterEvent), isMouse && this.notifyTarget(enterEvent, "mouseenter"), enterEvent.target = enterEvent.target.parent;
        this.freeEvent(enterEvent);
      }
      this.freeEvent(overEvent);
    }
    const allMethods = [], allowGlobalPointerEvents = this.enableGlobalMoveEvents ?? true;
    this.moveOnAll ? allMethods.push("pointermove") : this.dispatchEvent(e, "pointermove"), allowGlobalPointerEvents && allMethods.push("globalpointermove"), e.pointerType === "touch" && (this.moveOnAll ? allMethods.splice(1, 0, "touchmove") : this.dispatchEvent(e, "touchmove"), allowGlobalPointerEvents && allMethods.push("globaltouchmove")), isMouse && (this.moveOnAll ? allMethods.splice(1, 0, "mousemove") : this.dispatchEvent(e, "mousemove"), allowGlobalPointerEvents && allMethods.push("globalmousemove"), this.cursor = (_b = e.target) == null ? void 0 : _b.cursor), allMethods.length > 0 && this.all(e, allMethods), this._allInteractiveElements.length = 0, this._hitElements.length = 0, trackingData.overTargets = e.composedPath(), this.freeEvent(e);
  }
  /**
   * Maps the upstream `pointerover` to downstream `pointerover` and `pointerenter` events, in that order.
   *
   * The tracking data for the specific pointer gets a new `overTarget`.
   * @param from - The upstream `pointerover` event.
   */
  mapPointerOver(from) {
    var _a;
    if (!(from instanceof FederatedPointerEvent)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const trackingData = this.trackingData(from.pointerId), e = this.createPointerEvent(from), isMouse = e.pointerType === "mouse" || e.pointerType === "pen";
    this.dispatchEvent(e, "pointerover"), isMouse && this.dispatchEvent(e, "mouseover"), e.pointerType === "mouse" && (this.cursor = (_a = e.target) == null ? void 0 : _a.cursor);
    const enterEvent = this.clonePointerEvent(e, "pointerenter");
    for (enterEvent.eventPhase = enterEvent.AT_TARGET; enterEvent.target && enterEvent.target !== this.rootTarget.parent; )
      enterEvent.currentTarget = enterEvent.target, this.notifyTarget(enterEvent), isMouse && this.notifyTarget(enterEvent, "mouseenter"), enterEvent.target = enterEvent.target.parent;
    trackingData.overTargets = e.composedPath(), this.freeEvent(e), this.freeEvent(enterEvent);
  }
  /**
   * Maps the upstream `pointerout` to downstream `pointerout`, `pointerleave` events, in that order.
   *
   * The tracking data for the specific pointer is cleared of a `overTarget`.
   * @param from - The upstream `pointerout` event.
   */
  mapPointerOut(from) {
    if (!(from instanceof FederatedPointerEvent)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const trackingData = this.trackingData(from.pointerId);
    if (trackingData.overTargets) {
      const isMouse = from.pointerType === "mouse" || from.pointerType === "pen", outTarget = this.findMountedTarget(trackingData.overTargets), outEvent = this.createPointerEvent(from, "pointerout", outTarget);
      this.dispatchEvent(outEvent), isMouse && this.dispatchEvent(outEvent, "mouseout");
      const leaveEvent = this.createPointerEvent(from, "pointerleave", outTarget);
      for (leaveEvent.eventPhase = leaveEvent.AT_TARGET; leaveEvent.target && leaveEvent.target !== this.rootTarget.parent; )
        leaveEvent.currentTarget = leaveEvent.target, this.notifyTarget(leaveEvent), isMouse && this.notifyTarget(leaveEvent, "mouseleave"), leaveEvent.target = leaveEvent.target.parent;
      trackingData.overTargets = null, this.freeEvent(outEvent), this.freeEvent(leaveEvent);
    }
    this.cursor = null;
  }
  /**
   * Maps the upstream `pointerup` event to downstream `pointerup`, `pointerupoutside`,
   * and `click`/`rightclick`/`pointertap` events, in that order.
   *
   * The `pointerupoutside` event bubbles from the original `pointerdown` target to the most specific
   * ancestor of the `pointerdown` and `pointerup` targets, which is also the `click` event's target. `touchend`,
   * `rightup`, `mouseup`, `touchendoutside`, `rightupoutside`, `mouseupoutside`, and `tap` are fired as well for
   * specific pointer types.
   * @param from - The upstream `pointerup` event.
   */
  mapPointerUp(from) {
    if (!(from instanceof FederatedPointerEvent)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const now = performance.now(), e = this.createPointerEvent(from);
    if (this.dispatchEvent(e, "pointerup"), e.pointerType === "touch")
      this.dispatchEvent(e, "touchend");
    else if (e.pointerType === "mouse" || e.pointerType === "pen") {
      const isRightButton = e.button === 2;
      this.dispatchEvent(e, isRightButton ? "rightup" : "mouseup");
    }
    const trackingData = this.trackingData(from.pointerId), pressTarget = this.findMountedTarget(trackingData.pressTargetsByButton[from.button]);
    let clickTarget = pressTarget;
    if (pressTarget && !e.composedPath().includes(pressTarget)) {
      let currentTarget = pressTarget;
      for (; currentTarget && !e.composedPath().includes(currentTarget); ) {
        if (e.currentTarget = currentTarget, this.notifyTarget(e, "pointerupoutside"), e.pointerType === "touch")
          this.notifyTarget(e, "touchendoutside");
        else if (e.pointerType === "mouse" || e.pointerType === "pen") {
          const isRightButton = e.button === 2;
          this.notifyTarget(e, isRightButton ? "rightupoutside" : "mouseupoutside");
        }
        currentTarget = currentTarget.parent;
      }
      delete trackingData.pressTargetsByButton[from.button], clickTarget = currentTarget;
    }
    if (clickTarget) {
      const clickEvent = this.clonePointerEvent(e, "click");
      clickEvent.target = clickTarget, clickEvent.path = null, trackingData.clicksByButton[from.button] || (trackingData.clicksByButton[from.button] = {
        clickCount: 0,
        target: clickEvent.target,
        timeStamp: now
      });
      const clickHistory = trackingData.clicksByButton[from.button];
      if (clickHistory.target === clickEvent.target && now - clickHistory.timeStamp < 200 ? ++clickHistory.clickCount : clickHistory.clickCount = 1, clickHistory.target = clickEvent.target, clickHistory.timeStamp = now, clickEvent.detail = clickHistory.clickCount, clickEvent.pointerType === "mouse") {
        const isRightButton = clickEvent.button === 2;
        this.dispatchEvent(clickEvent, isRightButton ? "rightclick" : "click");
      } else
        clickEvent.pointerType === "touch" && this.dispatchEvent(clickEvent, "tap");
      this.dispatchEvent(clickEvent, "pointertap"), this.freeEvent(clickEvent);
    }
    this.freeEvent(e);
  }
  /**
   * Maps the upstream `pointerupoutside` event to a downstream `pointerupoutside` event, bubbling from the original
   * `pointerdown` target to `rootTarget`.
   *
   * (The most specific ancestor of the `pointerdown` event and the `pointerup` event must the
   * `{@link PIXI.EventBoundary}'s root because the `pointerup` event occurred outside of the boundary.)
   *
   * `touchendoutside`, `mouseupoutside`, and `rightupoutside` events are fired as well for specific pointer
   * types. The tracking data for the specific pointer is cleared of a `pressTarget`.
   * @param from - The upstream `pointerupoutside` event.
   */
  mapPointerUpOutside(from) {
    if (!(from instanceof FederatedPointerEvent)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const trackingData = this.trackingData(from.pointerId), pressTarget = this.findMountedTarget(trackingData.pressTargetsByButton[from.button]), e = this.createPointerEvent(from);
    if (pressTarget) {
      let currentTarget = pressTarget;
      for (; currentTarget; )
        e.currentTarget = currentTarget, this.notifyTarget(e, "pointerupoutside"), e.pointerType === "touch" ? this.notifyTarget(e, "touchendoutside") : (e.pointerType === "mouse" || e.pointerType === "pen") && this.notifyTarget(e, e.button === 2 ? "rightupoutside" : "mouseupoutside"), currentTarget = currentTarget.parent;
      delete trackingData.pressTargetsByButton[from.button];
    }
    this.freeEvent(e);
  }
  /**
   * Maps the upstream `wheel` event to a downstream `wheel` event.
   * @param from - The upstream `wheel` event.
   */
  mapWheel(from) {
    if (!(from instanceof FederatedWheelEvent)) {
      console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
      return;
    }
    const wheelEvent = this.createWheelEvent(from);
    this.dispatchEvent(wheelEvent), this.freeEvent(wheelEvent);
  }
  /**
   * Finds the most specific event-target in the given propagation path that is still mounted in the scene graph.
   *
   * This is used to find the correct `pointerup` and `pointerout` target in the case that the original `pointerdown`
   * or `pointerover` target was unmounted from the scene graph.
   * @param propagationPath - The propagation path was valid in the past.
   * @returns - The most specific event-target still mounted at the same location in the scene graph.
   */
  findMountedTarget(propagationPath) {
    if (!propagationPath)
      return null;
    let currentTarget = propagationPath[0];
    for (let i = 1; i < propagationPath.length && propagationPath[i].parent === currentTarget; i++)
      currentTarget = propagationPath[i];
    return currentTarget;
  }
  /**
   * Creates an event whose {@code originalEvent} is {@code from}, with an optional `type` and `target` override.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The {@code originalEvent} for the returned event.
   * @param [type=from.type] - The type of the returned event.
   * @param target - The target of the returned event.
   */
  createPointerEvent(from, type, target) {
    const event = this.allocateEvent(FederatedPointerEvent);
    return this.copyPointerData(from, event), this.copyMouseData(from, event), this.copyData(from, event), event.nativeEvent = from.nativeEvent, event.originalEvent = from, event.target = target ?? this.hitTest(event.global.x, event.global.y) ?? this._hitElements[0], typeof type == "string" && (event.type = type), event;
  }
  /**
   * Creates a wheel event whose {@code originalEvent} is {@code from}.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The upstream wheel event.
   */
  createWheelEvent(from) {
    const event = this.allocateEvent(FederatedWheelEvent);
    return this.copyWheelData(from, event), this.copyMouseData(from, event), this.copyData(from, event), event.nativeEvent = from.nativeEvent, event.originalEvent = from, event.target = this.hitTest(event.global.x, event.global.y), event;
  }
  /**
   * Clones the event {@code from}, with an optional {@code type} override.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The event to clone.
   * @param [type=from.type] - The type of the returned event.
   */
  clonePointerEvent(from, type) {
    const event = this.allocateEvent(FederatedPointerEvent);
    return event.nativeEvent = from.nativeEvent, event.originalEvent = from.originalEvent, this.copyPointerData(from, event), this.copyMouseData(from, event), this.copyData(from, event), event.target = from.target, event.path = from.composedPath().slice(), event.type = type ?? event.type, event;
  }
  /**
   * Copies wheel {@link PIXI.FederatedWheelEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + deltaMode
   * + deltaX
   * + deltaY
   * + deltaZ
   * @param from
   * @param to
   */
  copyWheelData(from, to) {
    to.deltaMode = from.deltaMode, to.deltaX = from.deltaX, to.deltaY = from.deltaY, to.deltaZ = from.deltaZ;
  }
  /**
   * Copies pointer {@link PIXI.FederatedPointerEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + pointerId
   * + width
   * + height
   * + isPrimary
   * + pointerType
   * + pressure
   * + tangentialPressure
   * + tiltX
   * + tiltY
   * @param from
   * @param to
   */
  copyPointerData(from, to) {
    from instanceof FederatedPointerEvent && to instanceof FederatedPointerEvent && (to.pointerId = from.pointerId, to.width = from.width, to.height = from.height, to.isPrimary = from.isPrimary, to.pointerType = from.pointerType, to.pressure = from.pressure, to.tangentialPressure = from.tangentialPressure, to.tiltX = from.tiltX, to.tiltY = from.tiltY, to.twist = from.twist);
  }
  /**
   * Copies mouse {@link PIXI.FederatedMouseEvent} data from {@code from} to {@code to}.
   *
   * The following properties are copied:
   * + altKey
   * + button
   * + buttons
   * + clientX
   * + clientY
   * + metaKey
   * + movementX
   * + movementY
   * + pageX
   * + pageY
   * + x
   * + y
   * + screen
   * + shiftKey
   * + global
   * @param from
   * @param to
   */
  copyMouseData(from, to) {
    from instanceof FederatedMouseEvent && to instanceof FederatedMouseEvent && (to.altKey = from.altKey, to.button = from.button, to.buttons = from.buttons, to.client.copyFrom(from.client), to.ctrlKey = from.ctrlKey, to.metaKey = from.metaKey, to.movement.copyFrom(from.movement), to.screen.copyFrom(from.screen), to.shiftKey = from.shiftKey, to.global.copyFrom(from.global));
  }
  /**
   * Copies base {@link PIXI.FederatedEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + isTrusted
   * + srcElement
   * + timeStamp
   * + type
   * @param from - The event to copy data from.
   * @param to - The event to copy data into.
   */
  copyData(from, to) {
    to.isTrusted = from.isTrusted, to.srcElement = from.srcElement, to.timeStamp = performance.now(), to.type = from.type, to.detail = from.detail, to.view = from.view, to.which = from.which, to.layer.copyFrom(from.layer), to.page.copyFrom(from.page);
  }
  /**
   * @param id - The pointer ID.
   * @returns The tracking data stored for the given pointer. If no data exists, a blank
   *  state will be created.
   */
  trackingData(id) {
    return this.mappingState.trackingData[id] || (this.mappingState.trackingData[id] = {
      pressTargetsByButton: {},
      clicksByButton: {},
      overTarget: null
    }), this.mappingState.trackingData[id];
  }
  /**
   * Allocate a specific type of event from {@link PIXI.EventBoundary#eventPool this.eventPool}.
   *
   * This allocation is constructor-agnostic, as long as it only takes one argument - this event
   * boundary.
   * @param constructor - The event's constructor.
   */
  allocateEvent(constructor) {
    this.eventPool.has(constructor) || this.eventPool.set(constructor, []);
    const event = this.eventPool.get(constructor).pop() || new constructor(this);
    return event.eventPhase = event.NONE, event.currentTarget = null, event.path = null, event.target = null, event;
  }
  /**
   * Frees the event and puts it back into the event pool.
   *
   * It is illegal to reuse the event until it is allocated again, using `this.allocateEvent`.
   *
   * It is also advised that events not allocated from {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}
   * not be freed. This is because of the possibility that the same event is freed twice, which can cause
   * it to be allocated twice & result in overwriting.
   * @param event - The event to be freed.
   * @throws Error if the event is managed by another event boundary.
   */
  freeEvent(event) {
    if (event.manager !== this)
      throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    const constructor = event.constructor;
    this.eventPool.has(constructor) || this.eventPool.set(constructor, []), this.eventPool.get(constructor).push(event);
  }
  /**
   * Similar to {@link PIXI.EventEmitter.emit}, except it stops if the `propagationImmediatelyStopped` flag
   * is set on the event.
   * @param e - The event to call each listener with.
   * @param type - The event key.
   */
  notifyListeners(e, type) {
    const listeners = e.currentTarget._events[type];
    if (listeners && e.currentTarget.isInteractive())
      if ("fn" in listeners)
        listeners.once && e.currentTarget.removeListener(type, listeners.fn, void 0, true), listeners.fn.call(listeners.context, e);
      else
        for (let i = 0, j = listeners.length; i < j && !e.propagationImmediatelyStopped; i++)
          listeners[i].once && e.currentTarget.removeListener(type, listeners[i].fn, void 0, true), listeners[i].fn.call(listeners[i].context, e);
  }
};

// node_modules/@pixi/events/lib/EventSystem.mjs
var MOUSE_POINTER_ID = 1;
var TOUCH_TO_POINTER = {
  touchstart: "pointerdown",
  touchend: "pointerup",
  touchendoutside: "pointerupoutside",
  touchmove: "pointermove",
  touchcancel: "pointercancel"
};
var _EventSystem = class _EventSystem2 {
  /**
   * @param {PIXI.Renderer} renderer
   */
  constructor(renderer) {
    this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = renderer, this.rootBoundary = new EventBoundary(null), EventsTicker.init(this), this.autoPreventDefault = true, this.eventsAdded = false, this.rootPointerEvent = new FederatedPointerEvent(null), this.rootWheelEvent = new FederatedWheelEvent(null), this.cursorStyles = {
      default: "inherit",
      pointer: "pointer"
    }, this.features = new Proxy({ ..._EventSystem2.defaultEventFeatures }, {
      set: (target, key, value) => (key === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = value), target[key] = value, true)
    }), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
  }
  /**
   * The default interaction mode for all display objects.
   * @see PIXI.DisplayObject.eventMode
   * @type {PIXI.EventMode}
   * @readonly
   * @since 7.2.0
   */
  static get defaultEventMode() {
    return this._defaultEventMode;
  }
  /**
   * Runner init called, view is available at this point.
   * @ignore
   */
  init(options) {
    const { view, resolution } = this.renderer;
    this.setTargetElement(view), this.resolution = resolution, _EventSystem2._defaultEventMode = options.eventMode ?? "auto", Object.assign(this.features, options.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
  }
  /**
   * Handle changing resolution.
   * @ignore
   */
  resolutionChange(resolution) {
    this.resolution = resolution;
  }
  /** Destroys all event listeners and detaches the renderer. */
  destroy() {
    this.setTargetElement(null), this.renderer = null;
  }
  /**
   * Sets the current cursor mode, handling any callbacks or CSS style changes.
   * @param mode - cursor mode, a key from the cursorStyles dictionary
   */
  setCursor(mode) {
    mode = mode || "default";
    let applyStyles = true;
    if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (applyStyles = false), this.currentCursor === mode)
      return;
    this.currentCursor = mode;
    const style = this.cursorStyles[mode];
    if (style)
      switch (typeof style) {
        case "string":
          applyStyles && (this.domElement.style.cursor = style);
          break;
        case "function":
          style(mode);
          break;
        case "object":
          applyStyles && Object.assign(this.domElement.style, style);
          break;
      }
    else
      applyStyles && typeof mode == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode) && (this.domElement.style.cursor = mode);
  }
  /**
   * The global pointer event.
   * Useful for getting the pointer position without listening to events.
   * @since 7.2.0
   */
  get pointer() {
    return this.rootPointerEvent;
  }
  /**
   * Event handler for pointer down events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */
  onPointerDown(nativeEvent) {
    if (!this.features.click)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const events = this.normalizeToPointerData(nativeEvent);
    this.autoPreventDefault && events[0].isNormalized && (nativeEvent.cancelable || !("cancelable" in nativeEvent)) && nativeEvent.preventDefault();
    for (let i = 0, j = events.length; i < j; i++) {
      const nativeEvent2 = events[i], federatedEvent = this.bootstrapEvent(this.rootPointerEvent, nativeEvent2);
      this.rootBoundary.mapEvent(federatedEvent);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Event handler for pointer move events on on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch events.
   */
  onPointerMove(nativeEvent) {
    if (!this.features.move)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, EventsTicker.pointerMoved();
    const normalizedEvents = this.normalizeToPointerData(nativeEvent);
    for (let i = 0, j = normalizedEvents.length; i < j; i++) {
      const event = this.bootstrapEvent(this.rootPointerEvent, normalizedEvents[i]);
      this.rootBoundary.mapEvent(event);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Event handler for pointer up events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */
  onPointerUp(nativeEvent) {
    if (!this.features.click)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    let target = nativeEvent.target;
    nativeEvent.composedPath && nativeEvent.composedPath().length > 0 && (target = nativeEvent.composedPath()[0]);
    const outside = target !== this.domElement ? "outside" : "", normalizedEvents = this.normalizeToPointerData(nativeEvent);
    for (let i = 0, j = normalizedEvents.length; i < j; i++) {
      const event = this.bootstrapEvent(this.rootPointerEvent, normalizedEvents[i]);
      event.type += outside, this.rootBoundary.mapEvent(event);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Event handler for pointer over & out events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */
  onPointerOverOut(nativeEvent) {
    if (!this.features.click)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const normalizedEvents = this.normalizeToPointerData(nativeEvent);
    for (let i = 0, j = normalizedEvents.length; i < j; i++) {
      const event = this.bootstrapEvent(this.rootPointerEvent, normalizedEvents[i]);
      this.rootBoundary.mapEvent(event);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Passive handler for `wheel` events on {@link PIXI.EventSystem.domElement this.domElement}.
   * @param nativeEvent - The native wheel event.
   */
  onWheel(nativeEvent) {
    if (!this.features.wheel)
      return;
    const wheelEvent = this.normalizeWheelEvent(nativeEvent);
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(wheelEvent);
  }
  /**
   * Sets the {@link PIXI.EventSystem#domElement domElement} and binds event listeners.
   *
   * To deregister the current DOM element without setting a new one, pass {@code null}.
   * @param element - The new DOM element.
   */
  setTargetElement(element) {
    this.removeEvents(), this.domElement = element, EventsTicker.domElement = element, this.addEvents();
  }
  /** Register event listeners on {@link PIXI.Renderer#domElement this.domElement}. */
  addEvents() {
    if (this.eventsAdded || !this.domElement)
      return;
    EventsTicker.addTickerListener();
    const style = this.domElement.style;
    style && (globalThis.navigator.msPointerEnabled ? (style.msContentZooming = "none", style.msTouchAction = "none") : this.supportsPointerEvents && (style.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, true), this.domElement.addEventListener("pointerdown", this.onPointerDown, true), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, true), this.domElement.addEventListener("pointerover", this.onPointerOverOut, true), globalThis.addEventListener("pointerup", this.onPointerUp, true)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, true), this.domElement.addEventListener("mousedown", this.onPointerDown, true), this.domElement.addEventListener("mouseout", this.onPointerOverOut, true), this.domElement.addEventListener("mouseover", this.onPointerOverOut, true), globalThis.addEventListener("mouseup", this.onPointerUp, true), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, true), this.domElement.addEventListener("touchend", this.onPointerUp, true), this.domElement.addEventListener("touchmove", this.onPointerMove, true))), this.domElement.addEventListener("wheel", this.onWheel, {
      passive: true,
      capture: true
    }), this.eventsAdded = true;
  }
  /** Unregister event listeners on {@link PIXI.EventSystem#domElement this.domElement}. */
  removeEvents() {
    if (!this.eventsAdded || !this.domElement)
      return;
    EventsTicker.removeTickerListener();
    const style = this.domElement.style;
    globalThis.navigator.msPointerEnabled ? (style.msContentZooming = "", style.msTouchAction = "") : this.supportsPointerEvents && (style.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, true), this.domElement.removeEventListener("pointerdown", this.onPointerDown, true), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, true), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, true), globalThis.removeEventListener("pointerup", this.onPointerUp, true)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, true), this.domElement.removeEventListener("mousedown", this.onPointerDown, true), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, true), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, true), globalThis.removeEventListener("mouseup", this.onPointerUp, true), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, true), this.domElement.removeEventListener("touchend", this.onPointerUp, true), this.domElement.removeEventListener("touchmove", this.onPointerMove, true))), this.domElement.removeEventListener("wheel", this.onWheel, true), this.domElement = null, this.eventsAdded = false;
  }
  /**
   * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
   * resulting value is stored in the point. This takes into account the fact that the DOM
   * element could be scaled and positioned anywhere on the screen.
   * @param  {PIXI.IPointData} point - the point that the result will be stored in
   * @param  {number} x - the x coord of the position to map
   * @param  {number} y - the y coord of the position to map
   */
  mapPositionToPoint(point, x, y) {
    const rect = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
      x: 0,
      y: 0,
      width: this.domElement.width,
      height: this.domElement.height,
      left: 0,
      top: 0
    }, resolutionMultiplier = 1 / this.resolution;
    point.x = (x - rect.left) * (this.domElement.width / rect.width) * resolutionMultiplier, point.y = (y - rect.top) * (this.domElement.height / rect.height) * resolutionMultiplier;
  }
  /**
   * Ensures that the original event object contains all data that a regular pointer event would have
   * @param event - The original event data from a touch or mouse event
   * @returns An array containing a single normalized pointer event, in the case of a pointer
   *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
   */
  normalizeToPointerData(event) {
    const normalizedEvents = [];
    if (this.supportsTouchEvents && event instanceof TouchEvent)
      for (let i = 0, li = event.changedTouches.length; i < li; i++) {
        const touch = event.changedTouches[i];
        typeof touch.button > "u" && (touch.button = 0), typeof touch.buttons > "u" && (touch.buttons = 1), typeof touch.isPrimary > "u" && (touch.isPrimary = event.touches.length === 1 && event.type === "touchstart"), typeof touch.width > "u" && (touch.width = touch.radiusX || 1), typeof touch.height > "u" && (touch.height = touch.radiusY || 1), typeof touch.tiltX > "u" && (touch.tiltX = 0), typeof touch.tiltY > "u" && (touch.tiltY = 0), typeof touch.pointerType > "u" && (touch.pointerType = "touch"), typeof touch.pointerId > "u" && (touch.pointerId = touch.identifier || 0), typeof touch.pressure > "u" && (touch.pressure = touch.force || 0.5), typeof touch.twist > "u" && (touch.twist = 0), typeof touch.tangentialPressure > "u" && (touch.tangentialPressure = 0), typeof touch.layerX > "u" && (touch.layerX = touch.offsetX = touch.clientX), typeof touch.layerY > "u" && (touch.layerY = touch.offsetY = touch.clientY), touch.isNormalized = true, touch.type = event.type, normalizedEvents.push(touch);
      }
    else if (!globalThis.MouseEvent || event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof globalThis.PointerEvent))) {
      const tempEvent = event;
      typeof tempEvent.isPrimary > "u" && (tempEvent.isPrimary = true), typeof tempEvent.width > "u" && (tempEvent.width = 1), typeof tempEvent.height > "u" && (tempEvent.height = 1), typeof tempEvent.tiltX > "u" && (tempEvent.tiltX = 0), typeof tempEvent.tiltY > "u" && (tempEvent.tiltY = 0), typeof tempEvent.pointerType > "u" && (tempEvent.pointerType = "mouse"), typeof tempEvent.pointerId > "u" && (tempEvent.pointerId = MOUSE_POINTER_ID), typeof tempEvent.pressure > "u" && (tempEvent.pressure = 0.5), typeof tempEvent.twist > "u" && (tempEvent.twist = 0), typeof tempEvent.tangentialPressure > "u" && (tempEvent.tangentialPressure = 0), tempEvent.isNormalized = true, normalizedEvents.push(tempEvent);
    } else
      normalizedEvents.push(event);
    return normalizedEvents;
  }
  /**
   * Normalizes the native {@link https://w3c.github.io/uievents/#interface-wheelevent WheelEvent}.
   *
   * The returned {@link PIXI.FederatedWheelEvent} is a shared instance. It will not persist across
   * multiple native wheel events.
   * @param nativeEvent - The native wheel event that occurred on the canvas.
   * @returns A federated wheel event.
   */
  normalizeWheelEvent(nativeEvent) {
    const event = this.rootWheelEvent;
    return this.transferMouseData(event, nativeEvent), event.deltaX = nativeEvent.deltaX, event.deltaY = nativeEvent.deltaY, event.deltaZ = nativeEvent.deltaZ, event.deltaMode = nativeEvent.deltaMode, this.mapPositionToPoint(event.screen, nativeEvent.clientX, nativeEvent.clientY), event.global.copyFrom(event.screen), event.offset.copyFrom(event.screen), event.nativeEvent = nativeEvent, event.type = nativeEvent.type, event;
  }
  /**
   * Normalizes the `nativeEvent` into a federateed {@link PIXI.FederatedPointerEvent}.
   * @param event
   * @param nativeEvent
   */
  bootstrapEvent(event, nativeEvent) {
    return event.originalEvent = null, event.nativeEvent = nativeEvent, event.pointerId = nativeEvent.pointerId, event.width = nativeEvent.width, event.height = nativeEvent.height, event.isPrimary = nativeEvent.isPrimary, event.pointerType = nativeEvent.pointerType, event.pressure = nativeEvent.pressure, event.tangentialPressure = nativeEvent.tangentialPressure, event.tiltX = nativeEvent.tiltX, event.tiltY = nativeEvent.tiltY, event.twist = nativeEvent.twist, this.transferMouseData(event, nativeEvent), this.mapPositionToPoint(event.screen, nativeEvent.clientX, nativeEvent.clientY), event.global.copyFrom(event.screen), event.offset.copyFrom(event.screen), event.isTrusted = nativeEvent.isTrusted, event.type === "pointerleave" && (event.type = "pointerout"), event.type.startsWith("mouse") && (event.type = event.type.replace("mouse", "pointer")), event.type.startsWith("touch") && (event.type = TOUCH_TO_POINTER[event.type] || event.type), event;
  }
  /**
   * Transfers base & mouse event data from the {@code nativeEvent} to the federated event.
   * @param event
   * @param nativeEvent
   */
  transferMouseData(event, nativeEvent) {
    event.isTrusted = nativeEvent.isTrusted, event.srcElement = nativeEvent.srcElement, event.timeStamp = performance.now(), event.type = nativeEvent.type, event.altKey = nativeEvent.altKey, event.button = nativeEvent.button, event.buttons = nativeEvent.buttons, event.client.x = nativeEvent.clientX, event.client.y = nativeEvent.clientY, event.ctrlKey = nativeEvent.ctrlKey, event.metaKey = nativeEvent.metaKey, event.movement.x = nativeEvent.movementX, event.movement.y = nativeEvent.movementY, event.page.x = nativeEvent.pageX, event.page.y = nativeEvent.pageY, event.relatedTarget = null, event.shiftKey = nativeEvent.shiftKey;
  }
};
_EventSystem.extension = {
  name: "events",
  type: [
    ExtensionType.RendererSystem,
    ExtensionType.CanvasRendererSystem
  ]
}, /**
* The event features that are enabled by the EventSystem
* This option only is available when using **@pixi/events** package
* (included in the **pixi.js** and **pixi.js-legacy** bundle), otherwise it will be ignored.
* @since 7.2.0
*/
_EventSystem.defaultEventFeatures = {
  move: true,
  globalMove: true,
  click: true,
  wheel: true
};
var EventSystem = _EventSystem;
extensions.add(EventSystem);

// node_modules/@pixi/events/lib/FederatedEventTarget.mjs
function convertEventModeToInteractiveMode(mode) {
  return mode === "dynamic" || mode === "static";
}
var FederatedDisplayObject = {
  /**
   * Property-based event handler for the `click` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onclick = (event) => {
   *  //some function here that happens on click
   * }
   */
  onclick: null,
  /**
   * Property-based event handler for the `mousedown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmousedown = (event) => {
   *  //some function here that happens on mousedown
   * }
   */
  onmousedown: null,
  /**
   * Property-based event handler for the `mouseenter` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseenter = (event) => {
   *  //some function here that happens on mouseenter
   * }
   */
  onmouseenter: null,
  /**
   * Property-based event handler for the `mouseleave` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseleave = (event) => {
   *  //some function here that happens on mouseleave
   * }
   */
  onmouseleave: null,
  /**
   * Property-based event handler for the `mousemove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmousemove = (event) => {
   *  //some function here that happens on mousemove
   * }
   */
  onmousemove: null,
  /**
   * Property-based event handler for the `globalmousemove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobalmousemove = (event) => {
   *  //some function here that happens on globalmousemove
   * }
   */
  onglobalmousemove: null,
  /**
   * Property-based event handler for the `mouseout` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseout = (event) => {
   *  //some function here that happens on mouseout
   * }
   */
  onmouseout: null,
  /**
   * Property-based event handler for the `mouseover` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseover = (event) => {
   *  //some function here that happens on mouseover
   * }
   */
  onmouseover: null,
  /**
   * Property-based event handler for the `mouseup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseup = (event) => {
   *  //some function here that happens on mouseup
   * }
   */
  onmouseup: null,
  /**
   * Property-based event handler for the `mouseupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseupoutside = (event) => {
   *  //some function here that happens on mouseupoutside
   * }
   */
  onmouseupoutside: null,
  /**
   * Property-based event handler for the `pointercancel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointercancel = (event) => {
   *  //some function here that happens on pointercancel
   * }
   */
  onpointercancel: null,
  /**
   * Property-based event handler for the `pointerdown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerdown = (event) => {
   *  //some function here that happens on pointerdown
   * }
   */
  onpointerdown: null,
  /**
   * Property-based event handler for the `pointerenter` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerenter = (event) => {
   *  //some function here that happens on pointerenter
   * }
   */
  onpointerenter: null,
  /**
   * Property-based event handler for the `pointerleave` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerleave = (event) => {
   *  //some function here that happens on pointerleave
   * }
   */
  onpointerleave: null,
  /**
   * Property-based event handler for the `pointermove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointermove = (event) => {
   *  //some function here that happens on pointermove
   * }
   */
  onpointermove: null,
  /**
   * Property-based event handler for the `globalpointermove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobalpointermove = (event) => {
   *  //some function here that happens on globalpointermove
   * }
   */
  onglobalpointermove: null,
  /**
   * Property-based event handler for the `pointerout` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerout = (event) => {
   *  //some function here that happens on pointerout
   * }
   */
  onpointerout: null,
  /**
   * Property-based event handler for the `pointerover` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerover = (event) => {
   *  //some function here that happens on pointerover
   * }
   */
  onpointerover: null,
  /**
   * Property-based event handler for the `pointertap` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointertap = (event) => {
   *  //some function here that happens on pointertap
   * }
   */
  onpointertap: null,
  /**
   * Property-based event handler for the `pointerup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerup = (event) => {
   *  //some function here that happens on pointerup
   * }
   */
  onpointerup: null,
  /**
   * Property-based event handler for the `pointerupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerupoutside = (event) => {
   *  //some function here that happens on pointerupoutside
   * }
   */
  onpointerupoutside: null,
  /**
   * Property-based event handler for the `rightclick` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightclick = (event) => {
   *  //some function here that happens on rightclick
   * }
   */
  onrightclick: null,
  /**
   * Property-based event handler for the `rightdown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightdown = (event) => {
   *  //some function here that happens on rightdown
   * }
   */
  onrightdown: null,
  /**
   * Property-based event handler for the `rightup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightup = (event) => {
   *  //some function here that happens on rightup
   * }
   */
  onrightup: null,
  /**
   * Property-based event handler for the `rightupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightupoutside = (event) => {
   *  //some function here that happens on rightupoutside
   * }
   */
  onrightupoutside: null,
  /**
   * Property-based event handler for the `tap` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontap = (event) => {
   *  //some function here that happens on tap
   * }
   */
  ontap: null,
  /**
   * Property-based event handler for the `touchcancel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchcancel = (event) => {
   *  //some function here that happens on touchcancel
   * }
   */
  ontouchcancel: null,
  /**
   * Property-based event handler for the `touchend` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchend = (event) => {
   *  //some function here that happens on touchend
   * }
   */
  ontouchend: null,
  /**
   * Property-based event handler for the `touchendoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchendoutside = (event) => {
   *  //some function here that happens on touchendoutside
   * }
   */
  ontouchendoutside: null,
  /**
   * Property-based event handler for the `touchmove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchmove = (event) => {
   *  //some function here that happens on touchmove
   * }
   */
  ontouchmove: null,
  /**
   * Property-based event handler for the `globaltouchmove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobaltouchmove = (event) => {
   *  //some function here that happens on globaltouchmove
   * }
   */
  onglobaltouchmove: null,
  /**
   * Property-based event handler for the `touchstart` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchstart = (event) => {
   *  //some function here that happens on touchstart
   * }
   */
  ontouchstart: null,
  /**
   * Property-based event handler for the `wheel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onwheel = (event) => {
   *  //some function here that happens on wheel
   * }
   */
  onwheel: null,
  /**
   * @ignore
   */
  _internalInteractive: void 0,
  /**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse
   * @memberof PIXI.DisplayObject#
   */
  get interactive() {
    return this._internalInteractive ?? convertEventModeToInteractiveMode(EventSystem.defaultEventMode);
  },
  set interactive(value) {
    lib_exports.deprecation(
      "7.2.0",
      // eslint-disable-next-line max-len
      "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."
    ), this._internalInteractive = value, this.eventMode = value ? "static" : "auto";
  },
  /**
   * @ignore
   */
  _internalEventMode: void 0,
  /**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse.
   * This now replaces the `interactive` property.
   * There are 5 types of interaction settings:
   * - `'none'`: Ignores all interaction events, even on its children.
   * - `'passive'`: Does not emit events and ignores all hit testing on itself and non-interactive children.
   * Interactive children will still emit events.
   * - `'auto'`: Does not emit events but is hit tested if parent is interactive. Same as `interactive = false` in v7
   * - `'static'`: Emit events and is hit tested. Same as `interaction = true` in v7
   * - `'dynamic'`: Emits events and is hit tested but will also receive mock interaction events fired from a ticker to
   * allow for interaction when the mouse isn't moving
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.on('tap', (event) => {
   *     // Handle event
   * });
   * @memberof PIXI.DisplayObject#
   * @since 7.2.0
   */
  get eventMode() {
    return this._internalEventMode ?? EventSystem.defaultEventMode;
  },
  set eventMode(value) {
    this._internalInteractive = convertEventModeToInteractiveMode(value), this._internalEventMode = value;
  },
  /**
   * Determines if the displayObject is interactive or not
   * @returns {boolean} Whether the displayObject is interactive or not
   * @memberof PIXI.DisplayObject#
   * @since 7.2.0
   * @example
   * import { Sprite } from 'pixi.js';
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'dynamic';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'none';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'passive';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'auto';
   * sprite.isInteractive(); // false
   */
  isInteractive() {
    return this.eventMode === "static" || this.eventMode === "dynamic";
  },
  /**
   * Determines if the children to the displayObject can be clicked/touched
   * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
   * @memberof PIXI.Container#
   */
  interactiveChildren: true,
  /**
   * Interaction shape. Children will be hit first, then this shape will be checked.
   * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
   * @example
   * import { Rectangle, Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.interactive = true;
   * sprite.hitArea = new Rectangle(0, 0, 100, 100);
   * @member {PIXI.IHitArea}
   * @memberof PIXI.DisplayObject#
   */
  hitArea: null,
  /**
   * Unlike `on` or `addListener` which are methods from EventEmitter, `addEventListener`
   * seeks to be compatible with the DOM's `addEventListener` with support for options.
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param type - The type of event to listen to.
   * @param listener - The listener callback or object.
   * @param options - Listener options, used for capture phase.
   * @example
   * // Tell the user whether they did a single, double, triple, or nth click.
   * button.addEventListener('click', {
   *     handleEvent(e): {
   *         let prefix;
   *
   *         switch (e.detail) {
   *             case 1: prefix = 'single'; break;
   *             case 2: prefix = 'double'; break;
   *             case 3: prefix = 'triple'; break;
   *             default: prefix = e.detail + 'th'; break;
   *         }
   *
   *         console.log('That was a ' + prefix + 'click');
   *     }
   * });
   *
   * // But skip the first click!
   * button.parent.addEventListener('click', function blockClickOnce(e) {
   *     e.stopImmediatePropagation();
   *     button.parent.removeEventListener('click', blockClickOnce, true);
   * }, {
   *     capture: true,
   * });
   */
  addEventListener(type, listener, options) {
    const capture = typeof options == "boolean" && options || typeof options == "object" && options.capture, signal = typeof options == "object" ? options.signal : void 0, once = typeof options == "object" ? options.once === true : false, context = typeof listener == "function" ? void 0 : listener;
    type = capture ? `${type}capture` : type;
    const listenerFn = typeof listener == "function" ? listener : listener.handleEvent, emitter = this;
    signal && signal.addEventListener("abort", () => {
      emitter.off(type, listenerFn, context);
    }), once ? emitter.once(type, listenerFn, context) : emitter.on(type, listenerFn, context);
  },
  /**
   * Unlike `off` or `removeListener` which are methods from EventEmitter, `removeEventListener`
   * seeks to be compatible with the DOM's `removeEventListener` with support for options.
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param type - The type of event the listener is bound to.
   * @param listener - The listener callback or object.
   * @param options - The original listener options. This is required to deregister a capture phase listener.
   */
  removeEventListener(type, listener, options) {
    const capture = typeof options == "boolean" && options || typeof options == "object" && options.capture, context = typeof listener == "function" ? void 0 : listener;
    type = capture ? `${type}capture` : type, listener = typeof listener == "function" ? listener : listener.handleEvent, this.off(type, listener, context);
  },
  /**
   * Dispatch the event on this {@link PIXI.DisplayObject} using the event's {@link PIXI.EventBoundary}.
   *
   * The target of the event is set to `this` and the `defaultPrevented` flag is cleared before dispatch.
   *
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param e - The event to dispatch.
   * @returns Whether the {@link PIXI.FederatedEvent.preventDefault preventDefault}() method was not invoked.
   * @example
   * // Reuse a click event!
   * button.dispatchEvent(clickEvent);
   */
  dispatchEvent(e) {
    if (!(e instanceof FederatedEvent))
      throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
    return e.defaultPrevented = false, e.path = null, e.target = this, e.manager.dispatchEvent(e), !e.defaultPrevented;
  }
};
DisplayObject.mixin(FederatedDisplayObject);

// node_modules/@pixi/accessibility/lib/accessibleTarget.mjs
var accessibleTarget = {
  /**
   *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
   *   shadow div with attributes set
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  accessible: false,
  /**
   * Sets the title attribute of the shadow div
   * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
   * @member {?string}
   * @memberof PIXI.DisplayObject#
   */
  accessibleTitle: null,
  /**
   * Sets the aria-label attribute of the shadow div
   * @member {string}
   * @memberof PIXI.DisplayObject#
   */
  accessibleHint: null,
  /**
   * @member {number}
   * @memberof PIXI.DisplayObject#
   * @private
   * @todo Needs docs.
   */
  tabIndex: 0,
  /**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */
  _accessibleActive: false,
  /**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */
  _accessibleDiv: null,
  /**
   * Specify the type of div the accessible layer is. Screen readers treat the element differently
   * depending on this type. Defaults to button.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'button'
   */
  accessibleType: "button",
  /**
   * Specify the pointer-events the accessible div will use
   * Defaults to auto.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'auto'
   */
  accessiblePointerEvents: "auto",
  /**
   * Setting to false will prevent any children inside this container to
   * be accessible. Defaults to true.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @default true
   */
  accessibleChildren: true,
  renderId: -1
};

// node_modules/@pixi/accessibility/lib/AccessibilityManager.mjs
DisplayObject.mixin(accessibleTarget);
var KEY_CODE_TAB = 9;
var DIV_TOUCH_SIZE = 100;
var DIV_TOUCH_POS_X = 0;
var DIV_TOUCH_POS_Y = 0;
var DIV_TOUCH_ZINDEX = 2;
var DIV_HOOK_SIZE = 1;
var DIV_HOOK_POS_X = -1e3;
var DIV_HOOK_POS_Y = -1e3;
var DIV_HOOK_ZINDEX = 2;
var AccessibilityManager = class {
  // 2fps
  /**
   * @param {PIXI.CanvasRenderer|PIXI.Renderer} renderer - A reference to the current renderer
   */
  constructor(renderer) {
    this.debug = false, this._isActive = false, this._isMobileAccessibility = false, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (lib_exports.isMobile.tablet || lib_exports.isMobile.phone) && this.createTouchHook();
    const div = document.createElement("div");
    div.style.width = `${DIV_TOUCH_SIZE}px`, div.style.height = `${DIV_TOUCH_SIZE}px`, div.style.position = "absolute", div.style.top = `${DIV_TOUCH_POS_X}px`, div.style.left = `${DIV_TOUCH_POS_Y}px`, div.style.zIndex = DIV_TOUCH_ZINDEX.toString(), this.div = div, this.renderer = renderer, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, false);
  }
  /**
   * Value of `true` if accessibility is currently active and accessibility layers are showing.
   * @member {boolean}
   * @readonly
   */
  get isActive() {
    return this._isActive;
  }
  /**
   * Value of `true` if accessibility is enabled for touch devices.
   * @member {boolean}
   * @readonly
   */
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  /**
   * Creates the touch hooks.
   * @private
   */
  createTouchHook() {
    const hookDiv = document.createElement("button");
    hookDiv.style.width = `${DIV_HOOK_SIZE}px`, hookDiv.style.height = `${DIV_HOOK_SIZE}px`, hookDiv.style.position = "absolute", hookDiv.style.top = `${DIV_HOOK_POS_X}px`, hookDiv.style.left = `${DIV_HOOK_POS_Y}px`, hookDiv.style.zIndex = DIV_HOOK_ZINDEX.toString(), hookDiv.style.backgroundColor = "#FF0000", hookDiv.title = "select to enable accessibility for this content", hookDiv.addEventListener("focus", () => {
      this._isMobileAccessibility = true, this.activate(), this.destroyTouchHook();
    }), document.body.appendChild(hookDiv), this._hookDiv = hookDiv;
  }
  /**
   * Destroys the touch hooks.
   * @private
   */
  destroyTouchHook() {
    this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
  }
  /**
   * Activating will cause the Accessibility layer to be shown.
   * This is called when a user presses the tab key.
   * @private
   */
  activate() {
    var _a;
    this._isActive || (this._isActive = true, globalThis.document.addEventListener("mousemove", this._onMouseMove, true), globalThis.removeEventListener("keydown", this._onKeyDown, false), this.renderer.on("postrender", this.update, this), (_a = this.renderer.view.parentNode) == null ? void 0 : _a.appendChild(this.div));
  }
  /**
   * Deactivating will cause the Accessibility layer to be hidden.
   * This is called when a user moves the mouse.
   * @private
   */
  deactivate() {
    var _a;
    !this._isActive || this._isMobileAccessibility || (this._isActive = false, globalThis.document.removeEventListener("mousemove", this._onMouseMove, true), globalThis.addEventListener("keydown", this._onKeyDown, false), this.renderer.off("postrender", this.update), (_a = this.div.parentNode) == null ? void 0 : _a.removeChild(this.div));
  }
  /**
   * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
   * @private
   * @param {PIXI.Container} displayObject - The DisplayObject to check.
   */
  updateAccessibleObjects(displayObject) {
    if (!displayObject.visible || !displayObject.accessibleChildren)
      return;
    displayObject.accessible && displayObject.isInteractive() && (displayObject._accessibleActive || this.addChild(displayObject), displayObject.renderId = this.renderId);
    const children = displayObject.children;
    if (children)
      for (let i = 0; i < children.length; i++)
        this.updateAccessibleObjects(children[i]);
  }
  /**
   * Before each render this function will ensure that all divs are mapped correctly to their DisplayObjects.
   * @private
   */
  update() {
    const now = performance.now();
    if (lib_exports.isMobile.android.device && now < this.androidUpdateCount || (this.androidUpdateCount = now + this.androidUpdateFrequency, !this.renderer.renderingToScreen))
      return;
    this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const { x, y, width, height } = this.renderer.view.getBoundingClientRect(), { width: viewWidth, height: viewHeight, resolution } = this.renderer, sx = width / viewWidth * resolution, sy = height / viewHeight * resolution;
    let div = this.div;
    div.style.left = `${x}px`, div.style.top = `${y}px`, div.style.width = `${viewWidth}px`, div.style.height = `${viewHeight}px`;
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.renderId !== this.renderId)
        child._accessibleActive = false, lib_exports.removeItems(this.children, i, 1), this.div.removeChild(child._accessibleDiv), this.pool.push(child._accessibleDiv), child._accessibleDiv = null, i--;
      else {
        div = child._accessibleDiv;
        let hitArea = child.hitArea;
        const wt = child.worldTransform;
        child.hitArea ? (div.style.left = `${(wt.tx + hitArea.x * wt.a) * sx}px`, div.style.top = `${(wt.ty + hitArea.y * wt.d) * sy}px`, div.style.width = `${hitArea.width * wt.a * sx}px`, div.style.height = `${hitArea.height * wt.d * sy}px`) : (hitArea = child.getBounds(), this.capHitArea(hitArea), div.style.left = `${hitArea.x * sx}px`, div.style.top = `${hitArea.y * sy}px`, div.style.width = `${hitArea.width * sx}px`, div.style.height = `${hitArea.height * sy}px`, div.title !== child.accessibleTitle && child.accessibleTitle !== null && (div.title = child.accessibleTitle), div.getAttribute("aria-label") !== child.accessibleHint && child.accessibleHint !== null && div.setAttribute("aria-label", child.accessibleHint)), (child.accessibleTitle !== div.title || child.tabIndex !== div.tabIndex) && (div.title = child.accessibleTitle, div.tabIndex = child.tabIndex, this.debug && this.updateDebugHTML(div));
      }
    }
    this.renderId++;
  }
  /**
   * private function that will visually add the information to the
   * accessability div
   * @param {HTMLElement} div -
   */
  updateDebugHTML(div) {
    div.innerHTML = `type: ${div.type}</br> title : ${div.title}</br> tabIndex: ${div.tabIndex}`;
  }
  /**
   * Adjust the hit area based on the bounds of a display object
   * @param {PIXI.Rectangle} hitArea - Bounds of the child
   */
  capHitArea(hitArea) {
    hitArea.x < 0 && (hitArea.width += hitArea.x, hitArea.x = 0), hitArea.y < 0 && (hitArea.height += hitArea.y, hitArea.y = 0);
    const { width: viewWidth, height: viewHeight } = this.renderer;
    hitArea.x + hitArea.width > viewWidth && (hitArea.width = viewWidth - hitArea.x), hitArea.y + hitArea.height > viewHeight && (hitArea.height = viewHeight - hitArea.y);
  }
  /**
   * Adds a DisplayObject to the accessibility manager
   * @private
   * @param {PIXI.DisplayObject} displayObject - The child to make accessible.
   */
  addChild(displayObject) {
    let div = this.pool.pop();
    div || (div = document.createElement("button"), div.style.width = `${DIV_TOUCH_SIZE}px`, div.style.height = `${DIV_TOUCH_SIZE}px`, div.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", div.style.position = "absolute", div.style.zIndex = DIV_TOUCH_ZINDEX.toString(), div.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? div.setAttribute("aria-live", "off") : div.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? div.setAttribute("aria-relevant", "additions") : div.setAttribute("aria-relevant", "text"), div.addEventListener("click", this._onClick.bind(this)), div.addEventListener("focus", this._onFocus.bind(this)), div.addEventListener("focusout", this._onFocusOut.bind(this))), div.style.pointerEvents = displayObject.accessiblePointerEvents, div.type = displayObject.accessibleType, displayObject.accessibleTitle && displayObject.accessibleTitle !== null ? div.title = displayObject.accessibleTitle : (!displayObject.accessibleHint || displayObject.accessibleHint === null) && (div.title = `displayObject ${displayObject.tabIndex}`), displayObject.accessibleHint && displayObject.accessibleHint !== null && div.setAttribute("aria-label", displayObject.accessibleHint), this.debug && this.updateDebugHTML(div), displayObject._accessibleActive = true, displayObject._accessibleDiv = div, div.displayObject = displayObject, this.children.push(displayObject), this.div.appendChild(displayObject._accessibleDiv), displayObject._accessibleDiv.tabIndex = displayObject.tabIndex;
  }
  /**
   * Dispatch events with the EventSystem.
   * @param e
   * @param type
   * @private
   */
  _dispatchEvent(e, type) {
    const { displayObject: target } = e.target, boundry = this.renderer.events.rootBoundary, event = Object.assign(new FederatedEvent(boundry), { target });
    boundry.rootTarget = this.renderer.lastObjectRendered, type.forEach((type2) => boundry.dispatchEvent(event, type2));
  }
  /**
   * Maps the div button press to pixi's EventSystem (click)
   * @private
   * @param {MouseEvent} e - The click event.
   */
  _onClick(e) {
    this._dispatchEvent(e, ["click", "pointertap", "tap"]);
  }
  /**
   * Maps the div focus events to pixi's EventSystem (mouseover)
   * @private
   * @param {FocusEvent} e - The focus event.
   */
  _onFocus(e) {
    e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(e, ["mouseover"]);
  }
  /**
   * Maps the div focus events to pixi's EventSystem (mouseout)
   * @private
   * @param {FocusEvent} e - The focusout event.
   */
  _onFocusOut(e) {
    e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "polite"), this._dispatchEvent(e, ["mouseout"]);
  }
  /**
   * Is called when a key is pressed
   * @private
   * @param {KeyboardEvent} e - The keydown event.
   */
  _onKeyDown(e) {
    e.keyCode === KEY_CODE_TAB && this.activate();
  }
  /**
   * Is called when the mouse moves across the renderer element
   * @private
   * @param {MouseEvent} e - The mouse event.
   */
  _onMouseMove(e) {
    e.movementX === 0 && e.movementY === 0 || this.deactivate();
  }
  /** Destroys the accessibility manager */
  destroy() {
    this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, true), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
  }
};
AccessibilityManager.extension = {
  name: "accessibility",
  type: [
    ExtensionType.RendererPlugin,
    ExtensionType.CanvasRendererPlugin
  ]
};
extensions.add(AccessibilityManager);

// node_modules/@pixi/app/lib/Application.mjs
var _Application = class _Application2 {
  /**
   * @param options - The optional application and renderer parameters.
   */
  constructor(options) {
    this.stage = new Container(), options = Object.assign({
      forceCanvas: false
    }, options), this.renderer = autoDetectRenderer(options), _Application2._plugins.forEach((plugin) => {
      plugin.init.call(this, options);
    });
  }
  /** Render the current stage. */
  render() {
    this.renderer.render(this.stage);
  }
  /**
   * Reference to the renderer's canvas element.
   * @member {PIXI.ICanvas}
   * @readonly
   */
  get view() {
    var _a;
    return (_a = this.renderer) == null ? void 0 : _a.view;
  }
  /**
   * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
   * @member {PIXI.Rectangle}
   * @readonly
   */
  get screen() {
    var _a;
    return (_a = this.renderer) == null ? void 0 : _a.screen;
  }
  /**
   * Destroy and don't use after this.
   * @param {boolean} [removeView=false] - Automatically remove canvas from DOM.
   * @param {object|boolean} [stageOptions] - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [stageOptions.children=false] - if set to true, all the children will have their destroy
   *  method called as well. 'stageOptions' will be passed on to those calls.
   * @param {boolean} [stageOptions.texture=false] - Only used for child Sprites if stageOptions.children is set
   *  to true. Should it destroy the texture of the child sprite
   * @param {boolean} [stageOptions.baseTexture=false] - Only used for child Sprites if stageOptions.children is set
   *  to true. Should it destroy the base texture of the child sprite
   */
  destroy(removeView, stageOptions) {
    const plugins = _Application2._plugins.slice(0);
    plugins.reverse(), plugins.forEach((plugin) => {
      plugin.destroy.call(this);
    }), this.stage.destroy(stageOptions), this.stage = null, this.renderer.destroy(removeView), this.renderer = null;
  }
};
_Application._plugins = [];
var Application = _Application;
extensions.handleByList(ExtensionType.Application, Application._plugins);

// node_modules/@pixi/app/lib/ResizePlugin.mjs
var ResizePlugin = class {
  /**
   * Initialize the plugin with scope of application instance
   * @static
   * @private
   * @param {object} [options] - See application options
   */
  static init(options) {
    Object.defineProperty(
      this,
      "resizeTo",
      /**
       * The HTML element or window to automatically resize the
       * renderer's view element to match width and height.
       * @member {Window|HTMLElement}
       * @name resizeTo
       * @memberof PIXI.Application#
       */
      {
        set(dom) {
          globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = dom, dom && (globalThis.addEventListener("resize", this.queueResize), this.resize());
        },
        get() {
          return this._resizeTo;
        }
      }
    ), this.queueResize = () => {
      this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
    }, this.cancelResize = () => {
      this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
    }, this.resize = () => {
      if (!this._resizeTo)
        return;
      this.cancelResize();
      let width, height;
      if (this._resizeTo === globalThis.window)
        width = globalThis.innerWidth, height = globalThis.innerHeight;
      else {
        const { clientWidth, clientHeight } = this._resizeTo;
        width = clientWidth, height = clientHeight;
      }
      this.renderer.resize(width, height), this.render();
    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = options.resizeTo || null;
  }
  /**
   * Clean up the ticker, scoped to application
   * @static
   * @private
   */
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
  }
};
ResizePlugin.extension = ExtensionType.Application;
extensions.add(ResizePlugin);

// node_modules/@pixi/assets/lib/AssetExtension.mjs
var assetKeyMap = {
  loader: ExtensionType.LoadParser,
  resolver: ExtensionType.ResolveParser,
  cache: ExtensionType.CacheParser,
  detection: ExtensionType.DetectionParser
};
extensions.handle(ExtensionType.Asset, (extension) => {
  const ref = extension.ref;
  Object.entries(assetKeyMap).filter(([key]) => !!ref[key]).forEach(([key, type]) => extensions.add(Object.assign(
    ref[key],
    // Allow the function to optionally define it's own
    // ExtensionMetadata, the use cases here is priority for LoaderParsers
    { extension: ref[key].extension ?? type }
  )));
}, (extension) => {
  const ref = extension.ref;
  Object.keys(assetKeyMap).filter((key) => !!ref[key]).forEach((key) => extensions.remove(ref[key]));
});

// node_modules/@pixi/assets/lib/BackgroundLoader.mjs
var BackgroundLoader = class {
  /**
   * @param loader
   * @param verbose - should the loader log to the console
   */
  constructor(loader, verbose = false) {
    this._loader = loader, this._assetList = [], this._isLoading = false, this._maxConcurrent = 1, this.verbose = verbose;
  }
  /**
   * Adds an array of assets to load.
   * @param assetUrls - assets to load
   */
  add(assetUrls) {
    assetUrls.forEach((a) => {
      this._assetList.push(a);
    }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
  }
  /**
   * Loads the next set of assets. Will try to load as many assets as it can at the same time.
   *
   * The max assets it will try to load at one time will be 4.
   */
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = true;
      const toLoad = [], toLoadAmount = Math.min(this._assetList.length, this._maxConcurrent);
      for (let i = 0; i < toLoadAmount; i++)
        toLoad.push(this._assetList.pop());
      await this._loader.load(toLoad), this._isLoading = false, this._next();
    }
  }
  /**
   * Activate/Deactivate the loading. If set to true then it will immediately continue to load the next asset.
   * @returns whether the class is active
   */
  get active() {
    return this._isActive;
  }
  set active(value) {
    this._isActive !== value && (this._isActive = value, value && !this._isLoading && this._next());
  }
};

// node_modules/@pixi/assets/lib/utils/checkDataUrl.mjs
function checkDataUrl(url, mimes) {
  if (Array.isArray(mimes)) {
    for (const mime of mimes)
      if (url.startsWith(`data:${mime}`))
        return true;
    return false;
  }
  return url.startsWith(`data:${mimes}`);
}

// node_modules/@pixi/assets/lib/utils/checkExtension.mjs
function checkExtension(url, extension) {
  const tempURL = url.split("?")[0], ext = lib_exports.path.extname(tempURL).toLowerCase();
  return Array.isArray(extension) ? extension.includes(ext) : ext === extension;
}

// node_modules/@pixi/assets/lib/utils/convertToList.mjs
var convertToList = (input, transform, forceTransform = false) => (Array.isArray(input) || (input = [input]), transform ? input.map((item) => typeof item == "string" || forceTransform ? transform(item) : item) : input);

// node_modules/@pixi/assets/lib/utils/copySearchParams.mjs
var copySearchParams = (targetUrl, sourceUrl) => {
  const searchParams = sourceUrl.split("?")[1];
  return searchParams && (targetUrl += `?${searchParams}`), targetUrl;
};

// node_modules/@pixi/assets/lib/utils/createStringVariations.mjs
function processX(base, ids, depth, result, tags) {
  const id = ids[depth];
  for (let i = 0; i < id.length; i++) {
    const value = id[i];
    depth < ids.length - 1 ? processX(base.replace(result[depth], value), ids, depth + 1, result, tags) : tags.push(base.replace(result[depth], value));
  }
}
function createStringVariations(string) {
  const regex = /\{(.*?)\}/g, result = string.match(regex), tags = [];
  if (result) {
    const ids = [];
    result.forEach((vars) => {
      const split = vars.substring(1, vars.length - 1).split(",");
      ids.push(split);
    }), processX(string, ids, 0, result, tags);
  } else
    tags.push(string);
  return tags;
}

// node_modules/@pixi/assets/lib/utils/isSingleItem.mjs
var isSingleItem = (item) => !Array.isArray(item);

// node_modules/@pixi/assets/lib/cache/Cache.mjs
var CacheClass = class {
  constructor() {
    this._parsers = [], this._cache = /* @__PURE__ */ new Map(), this._cacheMap = /* @__PURE__ */ new Map();
  }
  /** Clear all entries. */
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  /**
   * Check if the key exists
   * @param key - The key to check
   */
  has(key) {
    return this._cache.has(key);
  }
  /**
   * Fetch entry by key
   * @param key - The key of the entry to get
   */
  get(key) {
    const result = this._cache.get(key);
    return result || console.warn(`[Assets] Asset id ${key} was not found in the Cache`), result;
  }
  /**
   * Set a value by key or keys name
   * @param key - The key or keys to set
   * @param value - The value to store in the cache or from which cacheable assets will be derived.
   */
  set(key, value) {
    const keys = convertToList(key);
    let cacheableAssets;
    for (let i = 0; i < this.parsers.length; i++) {
      const parser = this.parsers[i];
      if (parser.test(value)) {
        cacheableAssets = parser.getCacheableAssets(keys, value);
        break;
      }
    }
    cacheableAssets || (cacheableAssets = {}, keys.forEach((key2) => {
      cacheableAssets[key2] = value;
    }));
    const cacheKeys = Object.keys(cacheableAssets), cachedAssets = {
      cacheKeys,
      keys
    };
    if (keys.forEach((key2) => {
      this._cacheMap.set(key2, cachedAssets);
    }), cacheKeys.forEach((key2) => {
      this._cache.has(key2) && this._cache.get(key2) !== value && console.warn("[Cache] already has key:", key2), this._cache.set(key2, cacheableAssets[key2]);
    }), value instanceof Texture) {
      const texture = value;
      keys.forEach((key2) => {
        texture.baseTexture !== Texture.EMPTY.baseTexture && BaseTexture.addToCache(texture.baseTexture, key2), Texture.addToCache(texture, key2);
      });
    }
  }
  /**
   * Remove entry by key
   *
   * This function will also remove any associated alias from the cache also.
   * @param key - The key of the entry to remove
   */
  remove(key) {
    if (!this._cacheMap.has(key)) {
      console.warn(`[Assets] Asset id ${key} was not found in the Cache`);
      return;
    }
    const cacheMap = this._cacheMap.get(key);
    cacheMap.cacheKeys.forEach((key2) => {
      this._cache.delete(key2);
    }), cacheMap.keys.forEach((key2) => {
      this._cacheMap.delete(key2);
    });
  }
  /** All loader parsers registered */
  get parsers() {
    return this._parsers;
  }
};
var Cache = new CacheClass();

// node_modules/@pixi/assets/lib/loader/Loader.mjs
var Loader = class {
  constructor() {
    this._parsers = [], this._parsersValidated = false, this.parsers = new Proxy(this._parsers, {
      set: (target, key, value) => (this._parsersValidated = false, target[key] = value, true)
    }), this.promiseCache = {};
  }
  /** function used for testing */
  reset() {
    this._parsersValidated = false, this.promiseCache = {};
  }
  /**
   * Used internally to generate a promise for the asset to be loaded.
   * @param url - The URL to be loaded
   * @param data - any custom additional information relevant to the asset being loaded
   * @returns - a promise that will resolve to an Asset for example a Texture of a JSON object
   */
  _getLoadPromiseAndParser(url, data) {
    const result = {
      promise: null,
      parser: null
    };
    return result.promise = (async () => {
      var _a, _b;
      let asset = null, parser = null;
      if (data.loadParser && (parser = this._parserHash[data.loadParser], parser || console.warn(`[Assets] specified load parser "${data.loadParser}" not found while loading ${url}`)), !parser) {
        for (let i = 0; i < this.parsers.length; i++) {
          const parserX = this.parsers[i];
          if (parserX.load && ((_a = parserX.test) == null ? void 0 : _a.call(parserX, url, data, this))) {
            parser = parserX;
            break;
          }
        }
        if (!parser)
          return console.warn(`[Assets] ${url} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
      }
      asset = await parser.load(url, data, this), result.parser = parser;
      for (let i = 0; i < this.parsers.length; i++) {
        const parser2 = this.parsers[i];
        parser2.parse && parser2.parse && await ((_b = parser2.testParse) == null ? void 0 : _b.call(parser2, asset, data, this)) && (asset = await parser2.parse(asset, data, this) || asset, result.parser = parser2);
      }
      return asset;
    })(), result;
  }
  async load(assetsToLoadIn, onProgress) {
    this._parsersValidated || this._validateParsers();
    let count = 0;
    const assets = {}, singleAsset = isSingleItem(assetsToLoadIn), assetsToLoad = convertToList(assetsToLoadIn, (item) => ({
      alias: [item],
      src: item
    })), total = assetsToLoad.length, promises = assetsToLoad.map(async (asset) => {
      const url = lib_exports.path.toAbsolute(asset.src);
      if (!assets[asset.src])
        try {
          this.promiseCache[url] || (this.promiseCache[url] = this._getLoadPromiseAndParser(url, asset)), assets[asset.src] = await this.promiseCache[url].promise, onProgress && onProgress(++count / total);
        } catch (e) {
          throw delete this.promiseCache[url], delete assets[asset.src], new Error(`[Loader.load] Failed to load ${url}.
${e}`);
        }
    });
    return await Promise.all(promises), singleAsset ? assets[assetsToLoad[0].src] : assets;
  }
  /**
   * Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
   * The parser that created the asset, will be the one that unloads it.
   * @example
   * // Single asset:
   * const asset = await Loader.load('cool.png');
   *
   * await Loader.unload('cool.png');
   *
   * console.log(asset.destroyed); // true
   * @param assetsToUnloadIn - urls that you want to unload, or a single one!
   */
  async unload(assetsToUnloadIn) {
    const promises = convertToList(assetsToUnloadIn, (item) => ({
      alias: [item],
      src: item
    })).map(async (asset) => {
      var _a, _b;
      const url = lib_exports.path.toAbsolute(asset.src), loadPromise = this.promiseCache[url];
      if (loadPromise) {
        const loadedAsset = await loadPromise.promise;
        delete this.promiseCache[url], (_b = (_a = loadPromise.parser) == null ? void 0 : _a.unload) == null ? void 0 : _b.call(_a, loadedAsset, asset, this);
      }
    });
    await Promise.all(promises);
  }
  /** validates our parsers, right now it only checks for name conflicts but we can add more here as required! */
  _validateParsers() {
    this._parsersValidated = true, this._parserHash = this._parsers.filter((parser) => parser.name).reduce((hash, parser) => (hash[parser.name] && console.warn(`[Assets] loadParser name conflict "${parser.name}"`), { ...hash, [parser.name]: parser }), {});
  }
};

// node_modules/@pixi/assets/lib/loader/parsers/LoaderParser.mjs
var LoaderParserPriority = ((LoaderParserPriority2) => (LoaderParserPriority2[LoaderParserPriority2.Low = 0] = "Low", LoaderParserPriority2[LoaderParserPriority2.Normal = 1] = "Normal", LoaderParserPriority2[LoaderParserPriority2.High = 2] = "High", LoaderParserPriority2))(LoaderParserPriority || {});

// node_modules/@pixi/assets/lib/loader/parsers/loadJson.mjs
var validJSONExtension = ".json";
var validJSONMIME = "application/json";
var loadJson = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Low
  },
  name: "loadJson",
  test(url) {
    return checkDataUrl(url, validJSONMIME) || checkExtension(url, validJSONExtension);
  },
  async load(url) {
    return await (await settings.ADAPTER.fetch(url)).json();
  }
};
extensions.add(loadJson);

// node_modules/@pixi/assets/lib/loader/parsers/loadTxt.mjs
var validTXTExtension = ".txt";
var validTXTMIME = "text/plain";
var loadTxt = {
  name: "loadTxt",
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Low
  },
  test(url) {
    return checkDataUrl(url, validTXTMIME) || checkExtension(url, validTXTExtension);
  },
  async load(url) {
    return await (await settings.ADAPTER.fetch(url)).text();
  }
};
extensions.add(loadTxt);

// node_modules/@pixi/assets/lib/loader/parsers/loadWebFont.mjs
var validWeights = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
];
var validFontExtensions = [".ttf", ".otf", ".woff", ".woff2"];
var validFontMIMEs = [
  "font/ttf",
  "font/otf",
  "font/woff",
  "font/woff2"
];
var CSS_IDENT_TOKEN_REGEX = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function getFontFamilyName(url) {
  const ext = lib_exports.path.extname(url), nameTokens = lib_exports.path.basename(url, ext).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  let valid = nameTokens.length > 0;
  for (const token of nameTokens)
    if (!token.match(CSS_IDENT_TOKEN_REGEX)) {
      valid = false;
      break;
    }
  let fontFamilyName = nameTokens.join(" ");
  return valid || (fontFamilyName = `"${fontFamilyName.replace(/[\\"]/g, "\\$&")}"`), fontFamilyName;
}
var validURICharactersRegex = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function encodeURIWhenNeeded(uri) {
  return validURICharactersRegex.test(uri) ? uri : encodeURI(uri);
}
var loadWebFont = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Low
  },
  name: "loadWebFont",
  test(url) {
    return checkDataUrl(url, validFontMIMEs) || checkExtension(url, validFontExtensions);
  },
  async load(url, options) {
    var _a, _b, _c;
    const fonts = settings.ADAPTER.getFontFaceSet();
    if (fonts) {
      const fontFaces = [], name = ((_a = options.data) == null ? void 0 : _a.family) ?? getFontFamilyName(url), weights = ((_c = (_b = options.data) == null ? void 0 : _b.weights) == null ? void 0 : _c.filter((weight) => validWeights.includes(weight))) ?? ["normal"], data = options.data ?? {};
      for (let i = 0; i < weights.length; i++) {
        const weight = weights[i], font = new FontFace(name, `url(${encodeURIWhenNeeded(url)})`, {
          ...data,
          weight
        });
        await font.load(), fonts.add(font), fontFaces.push(font);
      }
      return fontFaces.length === 1 ? fontFaces[0] : fontFaces;
    }
    return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
  },
  unload(font) {
    (Array.isArray(font) ? font : [font]).forEach((t) => settings.ADAPTER.getFontFaceSet().delete(t));
  }
};
extensions.add(loadWebFont);

// node_modules/@pixi/assets/lib/_virtual/checkImageBitmap.worker.mjs
var WORKER_CODE = `(function() {
  "use strict";
  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  async function checkImageBitmap() {
    try {
      if (typeof createImageBitmap != "function")
        return !1;
      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap.width === 1 && imageBitmap.height === 1;
    } catch {
      return !1;
    }
  }
  checkImageBitmap().then((result) => {
    self.postMessage(result);
  });
})();
`;
var WORKER_URL = null;
var WorkerInstance = class extends Worker {
  constructor() {
    WORKER_URL || (WORKER_URL = URL.createObjectURL(new Blob([WORKER_CODE], { type: "application/javascript" }))), super(WORKER_URL);
  }
};
WorkerInstance.revokeObjectURL = function() {
  WORKER_URL && (URL.revokeObjectURL(WORKER_URL), WORKER_URL = null);
};

// node_modules/@pixi/assets/lib/_virtual/loadImageBitmap.worker.mjs
var WORKER_CODE2 = `(function() {
  "use strict";
  async function loadImageBitmap(url) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
    const imageBlob = await response.blob();
    return await createImageBitmap(imageBlob);
  }
  self.onmessage = async (event) => {
    try {
      const imageBitmap = await loadImageBitmap(event.data.data[0]);
      self.postMessage({
        data: imageBitmap,
        uuid: event.data.uuid,
        id: event.data.id
      }, [imageBitmap]);
    } catch (e) {
      self.postMessage({
        error: e,
        uuid: event.data.uuid,
        id: event.data.id
      });
    }
  };
})();
`;
var WORKER_URL2 = null;
var WorkerInstance2 = class extends Worker {
  constructor() {
    WORKER_URL2 || (WORKER_URL2 = URL.createObjectURL(new Blob([WORKER_CODE2], { type: "application/javascript" }))), super(WORKER_URL2);
  }
};
WorkerInstance2.revokeObjectURL = function() {
  WORKER_URL2 && (URL.revokeObjectURL(WORKER_URL2), WORKER_URL2 = null);
};

// node_modules/@pixi/assets/lib/loader/parsers/WorkerManager.mjs
var UUID = 0;
var MAX_WORKERS;
var WorkerManagerClass = class {
  constructor() {
    this._initialized = false, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {};
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((resolve) => {
      const worker = new WorkerInstance();
      worker.addEventListener("message", (event) => {
        worker.terminate(), WorkerInstance.revokeObjectURL(), resolve(event.data);
      });
    }), this._isImageBitmapSupported);
  }
  loadImageBitmap(src) {
    return this._run("loadImageBitmap", [src]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = true);
  }
  getWorker() {
    MAX_WORKERS === void 0 && (MAX_WORKERS = navigator.hardwareConcurrency || 4);
    let worker = this.workerPool.pop();
    return !worker && this._createdWorkers < MAX_WORKERS && (this._createdWorkers++, worker = new WorkerInstance2(), worker.addEventListener("message", (event) => {
      this.complete(event.data), this.returnWorker(event.target), this.next();
    })), worker;
  }
  returnWorker(worker) {
    this.workerPool.push(worker);
  }
  complete(data) {
    data.error !== void 0 ? this.resolveHash[data.uuid].reject(data.error) : this.resolveHash[data.uuid].resolve(data.data), this.resolveHash[data.uuid] = null;
  }
  async _run(id, args) {
    await this._initWorkers();
    const promise = new Promise((resolve, reject) => {
      this.queue.push({ id, arguments: args, resolve, reject });
    });
    return this.next(), promise;
  }
  next() {
    if (!this.queue.length)
      return;
    const worker = this.getWorker();
    if (!worker)
      return;
    const toDo = this.queue.pop(), id = toDo.id;
    this.resolveHash[UUID] = { resolve: toDo.resolve, reject: toDo.reject }, worker.postMessage({
      data: toDo.arguments,
      uuid: UUID++,
      id
    });
  }
};
var WorkerManager = new WorkerManagerClass();

// node_modules/@pixi/assets/lib/loader/parsers/textures/utils/createTexture.mjs
function createTexture(base, loader, url) {
  base.resource.internal = true;
  const texture = new Texture(base), unload = () => {
    delete loader.promiseCache[url], Cache.has(url) && Cache.remove(url);
  };
  return texture.baseTexture.once("destroyed", () => {
    url in loader.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."), unload());
  }), texture.once("destroyed", () => {
    base.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), unload());
  }), texture;
}

// node_modules/@pixi/assets/lib/loader/parsers/textures/loadTextures.mjs
var validImageExtensions = [".jpeg", ".jpg", ".png", ".webp", ".avif"];
var validImageMIMEs = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif"
];
async function loadImageBitmap(url) {
  const response = await settings.ADAPTER.fetch(url);
  if (!response.ok)
    throw new Error(`[loadImageBitmap] Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  const imageBlob = await response.blob();
  return await createImageBitmap(imageBlob);
}
var loadTextures = {
  name: "loadTextures",
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High
  },
  config: {
    preferWorkers: true,
    preferCreateImageBitmap: true,
    crossOrigin: "anonymous"
  },
  test(url) {
    return checkDataUrl(url, validImageMIMEs) || checkExtension(url, validImageExtensions);
  },
  async load(url, asset, loader) {
    var _a;
    const useImageBitmap = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
    let src;
    useImageBitmap ? this.config.preferWorkers && await WorkerManager.isImageBitmapSupported() ? src = await WorkerManager.loadImageBitmap(url) : src = await loadImageBitmap(url) : src = await new Promise((resolve, reject) => {
      const src2 = new Image();
      src2.crossOrigin = this.config.crossOrigin, src2.src = url, src2.complete ? resolve(src2) : (src2.onload = () => resolve(src2), src2.onerror = (e) => reject(e));
    });
    const options = { ...asset.data };
    options.resolution ?? (options.resolution = lib_exports.getResolutionOfUrl(url)), useImageBitmap && ((_a = options.resourceOptions) == null ? void 0 : _a.ownsImageBitmap) === void 0 && (options.resourceOptions = { ...options.resourceOptions }, options.resourceOptions.ownsImageBitmap = true);
    const base = new BaseTexture(src, options);
    return base.resource.src = url, createTexture(base, loader, url);
  },
  unload(texture) {
    texture.destroy(true);
  }
};
extensions.add(loadTextures);

// node_modules/@pixi/assets/lib/loader/parsers/textures/loadSVG.mjs
var validSVGExtension = ".svg";
var validSVGMIME = "image/svg+xml";
var loadSVG = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High
  },
  name: "loadSVG",
  test(url) {
    return checkDataUrl(url, validSVGMIME) || checkExtension(url, validSVGExtension);
  },
  async testParse(data) {
    return SVGResource.test(data);
  },
  async parse(asset, data, loader) {
    var _a;
    const src = new SVGResource(asset, (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.resourceOptions);
    await src.load();
    const base = new BaseTexture(src, {
      resolution: lib_exports.getResolutionOfUrl(asset),
      ...data == null ? void 0 : data.data
    });
    return base.resource.src = data.src, createTexture(base, loader, data.src);
  },
  async load(url, _options) {
    return (await settings.ADAPTER.fetch(url)).text();
  },
  unload: loadTextures.unload
};
extensions.add(loadSVG);

// node_modules/@pixi/assets/lib/loader/parsers/textures/loadVideo.mjs
var validVideoExtensions = [".mp4", ".m4v", ".webm", ".ogv"];
var validVideoMIMEs = [
  "video/mp4",
  "video/webm",
  "video/ogg"
];
var loadVideo = {
  name: "loadVideo",
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High
  },
  config: {
    defaultAutoPlay: true,
    defaultUpdateFPS: 0,
    defaultLoop: false,
    defaultMuted: false,
    defaultPlaysinline: true
  },
  test(url) {
    return checkDataUrl(url, validVideoMIMEs) || checkExtension(url, validVideoExtensions);
  },
  async load(url, loadAsset, loader) {
    var _a;
    let texture;
    const blob = await (await settings.ADAPTER.fetch(url)).blob(), blobURL = URL.createObjectURL(blob);
    try {
      const options = {
        autoPlay: this.config.defaultAutoPlay,
        updateFPS: this.config.defaultUpdateFPS,
        loop: this.config.defaultLoop,
        muted: this.config.defaultMuted,
        playsinline: this.config.defaultPlaysinline,
        ...(_a = loadAsset == null ? void 0 : loadAsset.data) == null ? void 0 : _a.resourceOptions,
        autoLoad: true
      }, src = new VideoResource(blobURL, options);
      await src.load();
      const base = new BaseTexture(src, {
        alphaMode: await lib_exports.detectVideoAlphaMode(),
        resolution: lib_exports.getResolutionOfUrl(url),
        ...loadAsset == null ? void 0 : loadAsset.data
      });
      base.resource.src = url, texture = createTexture(base, loader, url), texture.baseTexture.once("destroyed", () => {
        URL.revokeObjectURL(blobURL);
      });
    } catch (e) {
      throw URL.revokeObjectURL(blobURL), e;
    }
    return texture;
  },
  unload(texture) {
    texture.destroy(true);
  }
};
extensions.add(loadVideo);

// node_modules/@pixi/assets/lib/resolver/Resolver.mjs
var Resolver = class {
  constructor() {
    this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (bundleId, assetId) => `${bundleId}${this._bundleIdConnector}${assetId}`,
      extractAssetIdFromBundle: (bundleId, assetBundleId) => assetBundleId.replace(`${bundleId}${this._bundleIdConnector}`, "")
    }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
  }
  /**
   * Override how the resolver deals with generating bundle ids.
   * must be called before any bundles are added
   * @param bundleIdentifier - the bundle identifier options
   */
  setBundleIdentifier(bundleIdentifier) {
    if (this._bundleIdConnector = bundleIdentifier.connector ?? this._bundleIdConnector, this._createBundleAssetId = bundleIdentifier.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = bundleIdentifier.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
      throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  /**
   * Let the resolver know which assets you prefer to use when resolving assets.
   * Multiple prefer user defined rules can be added.
   * @example
   * resolver.prefer({
   *     // first look for something with the correct format, and then then correct resolution
   *     priority: ['format', 'resolution'],
   *     params:{
   *         format:'webp', // prefer webp images
   *         resolution: 2, // prefer a resolution of 2
   *     }
   * })
   * resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);
   * resolver.resolveUrl('foo') // => 'bar@2x.webp'
   * @param preferOrders - the prefer options
   */
  prefer(...preferOrders) {
    preferOrders.forEach((prefer) => {
      this._preferredOrder.push(prefer), prefer.priority || (prefer.priority = Object.keys(prefer.params));
    }), this._resolverHash = {};
  }
  /**
   * Set the base path to prepend to all urls when resolving
   * @example
   * resolver.basePath = 'https://home.com/';
   * resolver.add('foo', 'bar.ong');
   * resolver.resolveUrl('foo', 'bar.png'); // => 'https://home.com/bar.png'
   * @param basePath - the base path to use
   */
  set basePath(basePath) {
    this._basePath = basePath;
  }
  get basePath() {
    return this._basePath;
  }
  /**
   * Set the root path for root-relative URLs. By default the `basePath`'s root is used. If no `basePath` is set, then the
   * default value for browsers is `window.location.origin`
   * @example
   * // Application hosted on https://home.com/some-path/index.html
   * resolver.basePath = 'https://home.com/some-path/';
   * resolver.rootPath = 'https://home.com/';
   * resolver.add('foo', '/bar.png');
   * resolver.resolveUrl('foo', '/bar.png'); // => 'https://home.com/bar.png'
   * @param rootPath - the root path to use
   */
  set rootPath(rootPath) {
    this._rootPath = rootPath;
  }
  get rootPath() {
    return this._rootPath;
  }
  /**
   * All the active URL parsers that help the parser to extract information and create
   * an asset object-based on parsing the URL itself.
   *
   * Can be added using the extensions API
   * @example
   * resolver.add('foo', [
   *     {
   *         resolution: 2,
   *         format: 'png',
   *         src: 'image@2x.png',
   *     },
   *     {
   *         resolution:1,
   *         format:'png',
   *         src: 'image.png',
   *     },
   * ]);
   *
   * // With a url parser the information such as resolution and file format could extracted from the url itself:
   * extensions.add({
   *     extension: ExtensionType.ResolveParser,
   *     test: loadTextures.test, // test if url ends in an image
   *     parse: (value: string) =>
   *     ({
   *         resolution: parseFloat(settings.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
   *         format: value.split('.').pop(),
   *         src: value,
   *     }),
   * });
   *
   * // Now resolution and format can be extracted from the url
   * resolver.add('foo', [
   *     'image@2x.png',
   *     'image.png',
   * ]);
   */
  get parsers() {
    return this._parsers;
  }
  /** Used for testing, this resets the resolver to its initial state */
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
  }
  /**
   * Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
   * @param searchParams - the default url parameters to append when resolving urls
   */
  setDefaultSearchParams(searchParams) {
    if (typeof searchParams == "string")
      this._defaultSearchParams = searchParams;
    else {
      const queryValues = searchParams;
      this._defaultSearchParams = Object.keys(queryValues).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryValues[key])}`).join("&");
    }
  }
  /**
   * Returns the aliases for a given asset
   * @param asset - the asset to get the aliases for
   */
  getAlias(asset) {
    const { alias, name, src, srcs } = asset;
    return convertToList(
      alias || name || src || srcs,
      (value) => typeof value == "string" ? value : Array.isArray(value) ? value.map((v) => (v == null ? void 0 : v.src) ?? (v == null ? void 0 : v.srcs) ?? v) : (value == null ? void 0 : value.src) || (value == null ? void 0 : value.srcs) ? value.src ?? value.srcs : value,
      true
    );
  }
  /**
   * Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
   * generally a manifest would be built using a tool.
   * @param manifest - the manifest to add to the resolver
   */
  addManifest(manifest) {
    this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = manifest, manifest.bundles.forEach((bundle) => {
      this.addBundle(bundle.name, bundle.assets);
    });
  }
  /**
   * This adds a bundle of assets in one go so that you can resolve them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * resolver.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const resolvedAssets = await resolver.resolveBundle('animals');
   * @param bundleId - The id of the bundle to add
   * @param assets - A record of the asset or assets that will be chosen from when loading via the specified key
   */
  addBundle(bundleId, assets) {
    const assetNames = [];
    Array.isArray(assets) ? assets.forEach((asset) => {
      const srcs = asset.src ?? asset.srcs, aliases = asset.alias ?? asset.name;
      let ids;
      if (typeof aliases == "string") {
        const bundleAssetId = this._createBundleAssetId(bundleId, aliases);
        assetNames.push(bundleAssetId), ids = [aliases, bundleAssetId];
      } else {
        const bundleIds = aliases.map((name) => this._createBundleAssetId(bundleId, name));
        assetNames.push(...bundleIds), ids = [...aliases, ...bundleIds];
      }
      this.add({
        ...asset,
        alias: ids,
        src: srcs
      });
    }) : Object.keys(assets).forEach((key) => {
      const aliases = [key, this._createBundleAssetId(bundleId, key)];
      if (typeof assets[key] == "string")
        this.add({
          alias: aliases,
          src: assets[key]
        });
      else if (Array.isArray(assets[key]))
        this.add({
          alias: aliases,
          src: assets[key]
        });
      else {
        const asset = assets[key], assetSrc = asset.src ?? asset.srcs;
        this.add({
          ...asset,
          alias: aliases,
          src: Array.isArray(assetSrc) ? assetSrc : [assetSrc]
        });
      }
      assetNames.push(...aliases);
    }), this._bundles[bundleId] = assetNames;
  }
  add(aliases, srcs, data, format, loadParser) {
    const assets = [];
    typeof aliases == "string" || Array.isArray(aliases) && typeof aliases[0] == "string" ? (lib_exports.deprecation("7.2.0", `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`), assets.push({ alias: aliases, src: srcs, data, format, loadParser })) : Array.isArray(aliases) ? assets.push(...aliases) : assets.push(aliases);
    let keyCheck;
    keyCheck = (key) => {
      this.hasKey(key) && console.warn(`[Resolver] already has key: ${key} overwriting`);
    }, convertToList(assets).forEach((asset) => {
      const { src, srcs: srcs2 } = asset;
      let { data: data2, format: format2, loadParser: loadParser2 } = asset;
      const srcsToUse = convertToList(src || srcs2).map((src2) => typeof src2 == "string" ? createStringVariations(src2) : Array.isArray(src2) ? src2 : [src2]), aliasesToUse = this.getAlias(asset);
      Array.isArray(aliasesToUse) ? aliasesToUse.forEach(keyCheck) : keyCheck(aliasesToUse);
      const resolvedAssets = [];
      srcsToUse.forEach((srcs3) => {
        srcs3.forEach((src2) => {
          let formattedAsset = {};
          if (typeof src2 != "object") {
            formattedAsset.src = src2;
            for (let i = 0; i < this._parsers.length; i++) {
              const parser = this._parsers[i];
              if (parser.test(src2)) {
                formattedAsset = parser.parse(src2);
                break;
              }
            }
          } else
            data2 = src2.data ?? data2, format2 = src2.format ?? format2, loadParser2 = src2.loadParser ?? loadParser2, formattedAsset = {
              ...formattedAsset,
              ...src2
            };
          if (!aliasesToUse)
            throw new Error(`[Resolver] alias is undefined for this asset: ${formattedAsset.src}`);
          formattedAsset = this.buildResolvedAsset(formattedAsset, {
            aliases: aliasesToUse,
            data: data2,
            format: format2,
            loadParser: loadParser2
          }), resolvedAssets.push(formattedAsset);
        });
      }), aliasesToUse.forEach((alias) => {
        this._assetMap[alias] = resolvedAssets;
      });
    });
  }
  // TODO: this needs an overload like load did in Assets
  /**
   * If the resolver has had a manifest set via setManifest, this will return the assets urls for
   * a given bundleId or bundleIds.
   * @example
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * resolver.setManifest(manifest);
   * const resolved = resolver.resolveBundle('load-screen');
   * @param bundleIds - The bundle ids to resolve
   * @returns All the bundles assets or a hash of assets for each bundle specified
   */
  resolveBundle(bundleIds) {
    const singleAsset = isSingleItem(bundleIds);
    bundleIds = convertToList(bundleIds);
    const out = {};
    return bundleIds.forEach((bundleId) => {
      const assetNames = this._bundles[bundleId];
      if (assetNames) {
        const results = this.resolve(assetNames), assets = {};
        for (const key in results) {
          const asset = results[key];
          assets[this._extractAssetIdFromBundle(bundleId, key)] = asset;
        }
        out[bundleId] = assets;
      }
    }), singleAsset ? out[bundleIds[0]] : out;
  }
  /**
   * Does exactly what resolve does, but returns just the URL rather than the whole asset object
   * @param key - The key or keys to resolve
   * @returns - The URLs associated with the key(s)
   */
  resolveUrl(key) {
    const result = this.resolve(key);
    if (typeof key != "string") {
      const out = {};
      for (const i in result)
        out[i] = result[i].src;
      return out;
    }
    return result.src;
  }
  resolve(keys) {
    const singleAsset = isSingleItem(keys);
    keys = convertToList(keys);
    const result = {};
    return keys.forEach((key) => {
      if (!this._resolverHash[key])
        if (this._assetMap[key]) {
          let assets = this._assetMap[key];
          const bestAsset = assets[0], preferredOrder = this._getPreferredOrder(assets);
          preferredOrder == null ? void 0 : preferredOrder.priority.forEach((priorityKey) => {
            preferredOrder.params[priorityKey].forEach((value) => {
              const filteredAssets = assets.filter((asset) => asset[priorityKey] ? asset[priorityKey] === value : false);
              filteredAssets.length && (assets = filteredAssets);
            });
          }), this._resolverHash[key] = assets[0] ?? bestAsset;
        } else
          this._resolverHash[key] = this.buildResolvedAsset({
            alias: [key],
            src: key
          }, {});
      result[key] = this._resolverHash[key];
    }), singleAsset ? result[keys[0]] : result;
  }
  /**
   * Checks if an asset with a given key exists in the resolver
   * @param key - The key of the asset
   */
  hasKey(key) {
    return !!this._assetMap[key];
  }
  /**
   * Checks if a bundle with the given key exists in the resolver
   * @param key - The key of the bundle
   */
  hasBundle(key) {
    return !!this._bundles[key];
  }
  /**
   * Internal function for figuring out what prefer criteria an asset should use.
   * @param assets
   */
  _getPreferredOrder(assets) {
    for (let i = 0; i < assets.length; i++) {
      const asset = assets[0], preferred = this._preferredOrder.find((preference) => preference.params.format.includes(asset.format));
      if (preferred)
        return preferred;
    }
    return this._preferredOrder[0];
  }
  /**
   * Appends the default url parameters to the url
   * @param url - The url to append the default parameters to
   * @returns - The url with the default parameters appended
   */
  _appendDefaultSearchParams(url) {
    if (!this._defaultSearchParams)
      return url;
    const paramConnector = /\?/.test(url) ? "&" : "?";
    return `${url}${paramConnector}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(formattedAsset, data) {
    const { aliases, data: assetData, loadParser, format } = data;
    return (this._basePath || this._rootPath) && (formattedAsset.src = lib_exports.path.toAbsolute(formattedAsset.src, this._basePath, this._rootPath)), formattedAsset.alias = aliases ?? formattedAsset.alias ?? [formattedAsset.src], formattedAsset.src = this._appendDefaultSearchParams(formattedAsset.src), formattedAsset.data = { ...assetData || {}, ...formattedAsset.data }, formattedAsset.loadParser = loadParser ?? formattedAsset.loadParser, formattedAsset.format = format ?? lib_exports.path.extname(formattedAsset.src).slice(1), formattedAsset.srcs = formattedAsset.src, formattedAsset.name = formattedAsset.alias, formattedAsset;
  }
};

// node_modules/@pixi/assets/lib/Assets.mjs
var AssetsClass = class {
  constructor() {
    this._detections = [], this._initialized = false, this.resolver = new Resolver(), this.loader = new Loader(), this.cache = Cache, this._backgroundLoader = new BackgroundLoader(this.loader), this._backgroundLoader.active = true, this.reset();
  }
  /**
   * Best practice is to call this function before any loading commences
   * Initiating is the best time to add any customization to the way things are loaded.
   *
   * you do not need to call this for the Asset class to work, only if you want to set any initial properties
   * @param options - options to initialize the Asset manager with
   */
  async init(options = {}) {
    var _a, _b;
    if (this._initialized) {
      console.warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      return;
    }
    if (this._initialized = true, options.defaultSearchParams && this.resolver.setDefaultSearchParams(options.defaultSearchParams), options.basePath && (this.resolver.basePath = options.basePath), options.bundleIdentifier && this.resolver.setBundleIdentifier(options.bundleIdentifier), options.manifest) {
      let manifest = options.manifest;
      typeof manifest == "string" && (manifest = await this.load(manifest)), this.resolver.addManifest(manifest);
    }
    const resolutionPref = ((_a = options.texturePreference) == null ? void 0 : _a.resolution) ?? 1, resolution = typeof resolutionPref == "number" ? [resolutionPref] : resolutionPref, formats2 = await this._detectFormats({
      preferredFormats: (_b = options.texturePreference) == null ? void 0 : _b.format,
      skipDetections: options.skipDetections,
      detections: this._detections
    });
    this.resolver.prefer({
      params: {
        format: formats2,
        resolution
      }
    }), options.preferences && this.setPreferences(options.preferences);
  }
  add(aliases, srcs, data, format, loadParser) {
    this.resolver.add(aliases, srcs, data, format, loadParser);
  }
  async load(urls, onProgress) {
    this._initialized || await this.init();
    const singleAsset = isSingleItem(urls), urlArray = convertToList(urls).map((url) => {
      if (typeof url != "string") {
        const aliases = this.resolver.getAlias(url);
        return aliases.some((alias) => !this.resolver.hasKey(alias)) && this.add(url), Array.isArray(aliases) ? aliases[0] : aliases;
      }
      return this.resolver.hasKey(url) || this.add({ alias: url, src: url }), url;
    }), resolveResults = this.resolver.resolve(urlArray), out = await this._mapLoadToResolve(resolveResults, onProgress);
    return singleAsset ? out[urlArray[0]] : out;
  }
  /**
   * This adds a bundle of assets in one go so that you can load them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const assets = await Assets.loadBundle('animals');
   * @param bundleId - the id of the bundle to add
   * @param assets - a record of the asset or assets that will be chosen from when loading via the specified key
   */
  addBundle(bundleId, assets) {
    this.resolver.addBundle(bundleId, assets);
  }
  /**
   * Bundles are a way to load multiple assets at once.
   * If a manifest has been provided to the init function then you can load a bundle, or bundles.
   * you can also add bundles via `addBundle`
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * await Assets.init({ manifest });
   *
   * // Load a bundle...
   * loadScreenAssets = await Assets.loadBundle('load-screen');
   * // Load another bundle...
   * gameScreenAssets = await Assets.loadBundle('game-screen');
   * @param bundleIds - the bundle id or ids to load
   * @param onProgress - Optional function that is called when progress on asset loading is made.
   * The function is passed a single parameter, `progress`, which represents the percentage (0.0 - 1.0)
   * of the assets loaded. Do not use this function to detect when assets are complete and available,
   * instead use the Promise returned by this function.
   * @returns all the bundles assets or a hash of assets for each bundle specified
   */
  async loadBundle(bundleIds, onProgress) {
    this._initialized || await this.init();
    let singleAsset = false;
    typeof bundleIds == "string" && (singleAsset = true, bundleIds = [bundleIds]);
    const resolveResults = this.resolver.resolveBundle(bundleIds), out = {}, keys = Object.keys(resolveResults);
    let count = 0, total = 0;
    const _onProgress = () => {
      onProgress == null ? void 0 : onProgress(++count / total);
    }, promises = keys.map((bundleId) => {
      const resolveResult = resolveResults[bundleId];
      return total += Object.keys(resolveResult).length, this._mapLoadToResolve(resolveResult, _onProgress).then((resolveResult2) => {
        out[bundleId] = resolveResult2;
      });
    });
    return await Promise.all(promises), singleAsset ? out[bundleIds[0]] : out;
  }
  /**
   * Initiate a background load of some assets. It will passively begin to load these assets in the background.
   * So when you actually come to loading them you will get a promise that resolves to the loaded assets immediately
   *
   * An example of this might be that you would background load game assets after your inital load.
   * then when you got to actually load your game screen assets when a player goes to the game - the loading
   * would already have stared or may even be complete, saving you having to show an interim load bar.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.backgroundLoad('bunny.png');
   *
   * // later on in your app...
   * await Assets.loadBundle('bunny.png'); // Will resolve quicker as loading may have completed!
   * @param urls - the url / urls you want to background load
   */
  async backgroundLoad(urls) {
    this._initialized || await this.init(), typeof urls == "string" && (urls = [urls]);
    const resolveResults = this.resolver.resolve(urls);
    this._backgroundLoader.add(Object.values(resolveResults));
  }
  /**
   * Initiate a background of a bundle, works exactly like backgroundLoad but for bundles.
   * this can only be used if the loader has been initiated with a manifest
   * @example
   * import { Assets } from 'pixi.js';
   *
   * await Assets.init({
   *     manifest: {
   *         bundles: [
   *             {
   *                 name: 'load-screen',
   *                 assets: [...],
   *             },
   *             ...
   *         ],
   *     },
   * });
   *
   * Assets.backgroundLoadBundle('load-screen');
   *
   * // Later on in your app...
   * await Assets.loadBundle('load-screen'); // Will resolve quicker as loading may have completed!
   * @param bundleIds - the bundleId / bundleIds you want to background load
   */
  async backgroundLoadBundle(bundleIds) {
    this._initialized || await this.init(), typeof bundleIds == "string" && (bundleIds = [bundleIds]);
    const resolveResults = this.resolver.resolveBundle(bundleIds);
    Object.values(resolveResults).forEach((resolveResult) => {
      this._backgroundLoader.add(Object.values(resolveResult));
    });
  }
  /**
   * Only intended for development purposes.
   * This will wipe the resolver and caches.
   * You will need to reinitialize the Asset
   */
  reset() {
    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = false;
  }
  get(keys) {
    if (typeof keys == "string")
      return Cache.get(keys);
    const assets = {};
    for (let i = 0; i < keys.length; i++)
      assets[i] = Cache.get(keys[i]);
    return assets;
  }
  /**
   * helper function to map resolved assets back to loaded assets
   * @param resolveResults - the resolve results from the resolver
   * @param onProgress - the progress callback
   */
  async _mapLoadToResolve(resolveResults, onProgress) {
    const resolveArray = Object.values(resolveResults), resolveKeys = Object.keys(resolveResults);
    this._backgroundLoader.active = false;
    const loadedAssets = await this.loader.load(resolveArray, onProgress);
    this._backgroundLoader.active = true;
    const out = {};
    return resolveArray.forEach((resolveResult, i) => {
      const asset = loadedAssets[resolveResult.src], keys = [resolveResult.src];
      resolveResult.alias && keys.push(...resolveResult.alias), out[resolveKeys[i]] = asset, Cache.set(keys, asset);
    }), out;
  }
  /**
   * Unload an asset or assets. As the Assets class is responsible for creating the assets via the `load` function
   * this will make sure to destroy any assets and release them from memory.
   * Once unloaded, you will need to load the asset again.
   *
   * Use this to help manage assets if you find that you have a large app and you want to free up memory.
   *
   * - it's up to you as the developer to make sure that textures are not actively being used when you unload them,
   * Pixi won't break but you will end up with missing assets. Not a good look for the user!
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Load a URL:
   * const myImageTexture = await Assets.load('http://some.url.com/image.png'); // => returns a texture
   *
   * await Assets.unload('http://some.url.com/image.png')
   *
   * // myImageTexture will be destroyed now.
   *
   * // Unload multiple assets:
   * const textures = await Assets.unload(['thumper', 'chicko']);
   * @param urls - the urls to unload
   */
  async unload(urls) {
    this._initialized || await this.init();
    const urlArray = convertToList(urls).map((url) => typeof url != "string" ? url.src : url), resolveResults = this.resolver.resolve(urlArray);
    await this._unloadFromResolved(resolveResults);
  }
  /**
   * Bundles are a way to manage multiple assets at once.
   * this will unload all files in a bundle.
   *
   * once a bundle has been unloaded, you need to load it again to have access to the assets.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle({
   *     'thumper': 'http://some.url.com/thumper.png',
   * })
   *
   * const assets = await Assets.loadBundle('thumper');
   *
   * // Now to unload...
   *
   * await Assets.unloadBundle('thumper');
   *
   * // All assets in the assets object will now have been destroyed and purged from the cache
   * @param bundleIds - the bundle id or ids to unload
   */
  async unloadBundle(bundleIds) {
    this._initialized || await this.init(), bundleIds = convertToList(bundleIds);
    const resolveResults = this.resolver.resolveBundle(bundleIds), promises = Object.keys(resolveResults).map((bundleId) => this._unloadFromResolved(resolveResults[bundleId]));
    await Promise.all(promises);
  }
  async _unloadFromResolved(resolveResult) {
    const resolveArray = Object.values(resolveResult);
    resolveArray.forEach((resolveResult2) => {
      Cache.remove(resolveResult2.src);
    }), await this.loader.unload(resolveArray);
  }
  /**
   * Detects the supported formats for the browser, and returns an array of supported formats, respecting
   * the users preferred formats order.
   * @param options - the options to use when detecting formats
   * @param options.preferredFormats - the preferred formats to use
   * @param options.skipDetections - if we should skip the detections altogether
   * @param options.detections - the detections to use
   * @returns - the detected formats
   */
  async _detectFormats(options) {
    let formats2 = [];
    options.preferredFormats && (formats2 = Array.isArray(options.preferredFormats) ? options.preferredFormats : [options.preferredFormats]);
    for (const detection of options.detections)
      options.skipDetections || await detection.test() ? formats2 = await detection.add(formats2) : options.skipDetections || (formats2 = await detection.remove(formats2));
    return formats2 = formats2.filter((format, index) => formats2.indexOf(format) === index), formats2;
  }
  /** All the detection parsers currently added to the Assets class. */
  get detections() {
    return this._detections;
  }
  /**
   * @deprecated since 7.2.0
   * @see {@link Assets.setPreferences}
   */
  get preferWorkers() {
    return loadTextures.config.preferWorkers;
  }
  set preferWorkers(value) {
    lib_exports.deprecation("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."), this.setPreferences({ preferWorkers: value });
  }
  /**
   * General setter for preferences. This is a helper function to set preferences on all parsers.
   * @param preferences - the preferences to set
   */
  setPreferences(preferences) {
    this.loader.parsers.forEach((parser) => {
      parser.config && Object.keys(parser.config).filter((key) => key in preferences).forEach((key) => {
        parser.config[key] = preferences[key];
      });
    });
  }
};
var Assets = new AssetsClass();
extensions.handleByList(ExtensionType.LoadParser, Assets.loader.parsers).handleByList(ExtensionType.ResolveParser, Assets.resolver.parsers).handleByList(ExtensionType.CacheParser, Assets.cache.parsers).handleByList(ExtensionType.DetectionParser, Assets.detections);

// node_modules/@pixi/assets/lib/cache/parsers/cacheTextureArray.mjs
var cacheTextureArray = {
  extension: ExtensionType.CacheParser,
  test: (asset) => Array.isArray(asset) && asset.every((t) => t instanceof Texture),
  getCacheableAssets: (keys, asset) => {
    const out = {};
    return keys.forEach((key) => {
      asset.forEach((item, i) => {
        out[key + (i === 0 ? "" : i + 1)] = item;
      });
    }), out;
  }
};
extensions.add(cacheTextureArray);

// node_modules/@pixi/assets/lib/detections/utils/testImageFormat.mjs
async function testImageFormat(imageData) {
  if ("Image" in globalThis)
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve(true);
      }, image.onerror = () => {
        resolve(false);
      }, image.src = imageData;
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const blob = await (await fetch(imageData)).blob();
      await createImageBitmap(blob);
    } catch {
      return false;
    }
    return true;
  }
  return false;
}

// node_modules/@pixi/assets/lib/detections/parsers/detectAvif.mjs
var detectAvif = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 1
  },
  test: async () => testImageFormat(
    // eslint-disable-next-line max-len
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
  ),
  add: async (formats2) => [...formats2, "avif"],
  remove: async (formats2) => formats2.filter((f) => f !== "avif")
};
extensions.add(detectAvif);

// node_modules/@pixi/assets/lib/detections/parsers/detectWebp.mjs
var detectWebp = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testImageFormat(
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
  ),
  add: async (formats2) => [...formats2, "webp"],
  remove: async (formats2) => formats2.filter((f) => f !== "webp")
};
extensions.add(detectWebp);

// node_modules/@pixi/assets/lib/detections/parsers/detectDefaults.mjs
var imageFormats = ["png", "jpg", "jpeg"];
var detectDefaults = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(true),
  add: async (formats2) => [...formats2, ...imageFormats],
  remove: async (formats2) => formats2.filter((f) => !imageFormats.includes(f))
};
extensions.add(detectDefaults);

// node_modules/@pixi/assets/lib/detections/utils/testVideoFormat.mjs
var inWorker = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function testVideoFormat(mimeType) {
  return inWorker ? false : document.createElement("video").canPlayType(mimeType) !== "";
}

// node_modules/@pixi/assets/lib/detections/parsers/detectWebm.mjs
var detectWebm = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testVideoFormat("video/webm"),
  add: async (formats2) => [...formats2, "webm"],
  remove: async (formats2) => formats2.filter((f) => f !== "webm")
};
extensions.add(detectWebm);

// node_modules/@pixi/assets/lib/detections/parsers/detectMp4.mjs
var detectMp4 = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testVideoFormat("video/mp4"),
  add: async (formats2) => [...formats2, "mp4", "m4v"],
  remove: async (formats2) => formats2.filter((f) => f !== "mp4" && f !== "m4v")
};
extensions.add(detectMp4);

// node_modules/@pixi/assets/lib/detections/parsers/detectOgv.mjs
var detectOgv = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 0
  },
  test: async () => testVideoFormat("video/ogg"),
  add: async (formats2) => [...formats2, "ogv"],
  remove: async (formats2) => formats2.filter((f) => f !== "ogv")
};
extensions.add(detectOgv);

// node_modules/@pixi/assets/lib/resolver/parsers/resolveTextureUrl.mjs
var resolveTextureUrl = {
  extension: ExtensionType.ResolveParser,
  test: loadTextures.test,
  parse: (value) => {
    var _a;
    return {
      resolution: parseFloat(((_a = settings.RETINA_PREFIX.exec(value)) == null ? void 0 : _a[1]) ?? "1"),
      format: lib_exports.path.extname(value).slice(1),
      src: value
    };
  }
};
extensions.add(resolveTextureUrl);

// node_modules/@pixi/compressed-textures/lib/const.mjs
var INTERNAL_FORMATS = ((INTERNAL_FORMATS2) => (INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", INTERNAL_FORMATS2[INTERNAL_FORMATS2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", INTERNAL_FORMATS2))(INTERNAL_FORMATS || {});
var INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = {
  // WEBGL_compressed_texture_s3tc
  33776: 0.5,
  33777: 0.5,
  33778: 1,
  33779: 1,
  // WEBGL_compressed_texture_s3tc
  35916: 0.5,
  35917: 0.5,
  35918: 1,
  35919: 1,
  // WEBGL_compressed_texture_etc
  37488: 0.5,
  37489: 0.5,
  37490: 1,
  37491: 1,
  37492: 0.5,
  37496: 1,
  37493: 0.5,
  37497: 1,
  37494: 0.5,
  // ~~
  37495: 0.5,
  // ~~
  // WEBGL_compressed_texture_pvrtc
  35840: 0.5,
  35842: 0.5,
  35841: 0.25,
  35843: 0.25,
  // WEBGL_compressed_texture_etc1
  36196: 0.5,
  // @see https://www.khronos.org/registry/OpenGL/extensions/AMD/AMD_compressed_ATC_texture.txt
  // WEBGL_compressed_texture_atc
  35986: 0.5,
  35987: 1,
  34798: 1,
  // @see https://registry.khronos.org/OpenGL/extensions/KHR/KHR_texture_compression_astc_hdr.txt
  // WEBGL_compressed_texture_astc
  /* eslint-disable-next-line camelcase */
  37808: 1,
  // @see https://registry.khronos.org/OpenGL/extensions/EXT/EXT_texture_compression_bptc.txt
  // EXT_texture_compression_bptc
  36492: 1,
  36493: 1,
  36494: 1,
  36495: 1
};

// node_modules/@pixi/compressed-textures/lib/loaders/detectCompressedTextures.mjs
var storedGl;
var extensions2;
function getCompressedTextureExtensions() {
  extensions2 = {
    s3tc: storedGl.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: storedGl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    /* eslint-disable-line camelcase */
    etc: storedGl.getExtension("WEBGL_compressed_texture_etc"),
    etc1: storedGl.getExtension("WEBGL_compressed_texture_etc1"),
    pvrtc: storedGl.getExtension("WEBGL_compressed_texture_pvrtc") || storedGl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    atc: storedGl.getExtension("WEBGL_compressed_texture_atc"),
    astc: storedGl.getExtension("WEBGL_compressed_texture_astc"),
    bptc: storedGl.getExtension("EXT_texture_compression_bptc")
  };
}
var detectCompressedTextures = {
  extension: {
    type: ExtensionType.DetectionParser,
    priority: 2
  },
  test: async () => {
    const gl = settings.ADAPTER.createCanvas().getContext("webgl");
    return gl ? (storedGl = gl, true) : (console.warn("WebGL not available for compressed textures."), false);
  },
  add: async (formats2) => {
    extensions2 || getCompressedTextureExtensions();
    const textureFormats = [];
    for (const extensionName in extensions2)
      extensions2[extensionName] && textureFormats.push(extensionName);
    return [...textureFormats, ...formats2];
  },
  remove: async (formats2) => (extensions2 || getCompressedTextureExtensions(), formats2.filter((f) => !(f in extensions2)))
};
extensions.add(detectCompressedTextures);

// node_modules/@pixi/compressed-textures/lib/resources/BlobResource.mjs
var BlobResource = class extends BufferResource {
  /**
   * @param source - The buffer/URL of the texture file.
   * @param {PIXI.IBlobResourceOptions} [options]
   * @param {boolean} [options.autoLoad=false] - Whether to fetch the data immediately;
   *  you can fetch it later via {@link PIXI.BlobResource#load}.
   * @param {number} [options.width=1] - The width in pixels.
   * @param {number} [options.height=1] - The height in pixels.
   * @param {1|2|4|8} [options.unpackAlignment=4] - The alignment of the pixel rows.
   */
  constructor(source, options = { width: 1, height: 1, autoLoad: true }) {
    let origin, data;
    typeof source == "string" ? (origin = source, data = new Uint8Array()) : (origin = null, data = source), super(data, options), this.origin = origin, this.buffer = data ? new ViewableBuffer(data) : null, this._load = null, this.loaded = false, this.origin !== null && options.autoLoad !== false && this.load(), this.origin === null && this.buffer && (this._load = Promise.resolve(this), this.loaded = true, this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(_data) {
  }
  /** Loads the blob */
  load() {
    return this._load ? this._load : (this._load = fetch(this.origin).then((response) => response.blob()).then((blob) => blob.arrayBuffer()).then((arrayBuffer) => (this.data = new Uint32Array(arrayBuffer), this.buffer = new ViewableBuffer(arrayBuffer), this.loaded = true, this.onBlobLoaded(arrayBuffer), this.update(), this)), this._load);
  }
};

// node_modules/@pixi/compressed-textures/lib/resources/CompressedTextureResource.mjs
var CompressedTextureResource = class _CompressedTextureResource extends BlobResource {
  /**
   * @param source - the buffer/URL holding the compressed texture data
   * @param options
   * @param {PIXI.INTERNAL_FORMATS} options.format - the compression format
   * @param {number} options.width - the image width in pixels.
   * @param {number} options.height - the image height in pixels.
   * @param {number} [options.level=1] - the mipmap levels stored in the compressed texture, including level 0.
   * @param {number} [options.levelBuffers] - the buffers for each mipmap level. `CompressedTextureResource` can allows you
   *      to pass `null` for `source`, for cases where each level is stored in non-contiguous memory.
   */
  constructor(source, options) {
    super(source, options), this.format = options.format, this.levels = options.levels || 1, this._width = options.width, this._height = options.height, this._extension = _CompressedTextureResource._formatToExtension(this.format), (options.levelBuffers || this.buffer) && (this._levelBuffers = options.levelBuffers || _CompressedTextureResource._createLevelBuffers(
      source instanceof Uint8Array ? source : this.buffer.uint8View,
      this.format,
      this.levels,
      4,
      4,
      // PVRTC has 8x4 blocks in 2bpp mode
      this.width,
      this.height
    ));
  }
  /**
   * @override
   * @param renderer - A reference to the current renderer
   * @param _texture - the texture
   * @param _glTexture - texture instance for this webgl context
   */
  upload(renderer, _texture, _glTexture) {
    const gl = renderer.gl;
    if (!renderer.context.extensions[this._extension])
      throw new Error(`${this._extension} textures are not supported on the current machine`);
    if (!this._levelBuffers)
      return false;
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
    for (let i = 0, j = this.levels; i < j; i++) {
      const { levelID, levelWidth, levelHeight, levelBuffer } = this._levelBuffers[i];
      gl.compressedTexImage2D(gl.TEXTURE_2D, levelID, this.format, levelWidth, levelHeight, 0, levelBuffer);
    }
    return true;
  }
  /** @protected */
  onBlobLoaded() {
    this._levelBuffers = _CompressedTextureResource._createLevelBuffers(
      this.buffer.uint8View,
      this.format,
      this.levels,
      4,
      4,
      // PVRTC has 8x4 blocks in 2bpp mode
      this.width,
      this.height
    );
  }
  /**
   * Returns the key (to ContextSystem#extensions) for the WebGL extension supporting the compression format
   * @private
   * @param format - the compression format to get the extension for.
   */
  static _formatToExtension(format) {
    if (format >= 33776 && format <= 33779)
      return "s3tc";
    if (format >= 35916 && format <= 35919)
      return "s3tc_sRGB";
    if (format >= 37488 && format <= 37497)
      return "etc";
    if (format >= 35840 && format <= 35843)
      return "pvrtc";
    if (format === 36196)
      return "etc1";
    if (format === 35986 || format === 35987 || format === 34798)
      return "atc";
    if (format >= 36492 && format <= 36495)
      return "bptc";
    if (format === 37808)
      return "astc";
    throw new Error(`Invalid (compressed) texture format given: ${format}`);
  }
  /**
   * Pre-creates buffer views for each mipmap level
   * @private
   * @param buffer -
   * @param format - compression formats
   * @param levels - mipmap levels
   * @param blockWidth -
   * @param blockHeight -
   * @param imageWidth - width of the image in pixels
   * @param imageHeight - height of the image in pixels
   */
  static _createLevelBuffers(buffer, format, levels, blockWidth, blockHeight, imageWidth, imageHeight) {
    const buffers = new Array(levels);
    let offset = buffer.byteOffset, levelWidth = imageWidth, levelHeight = imageHeight, alignedLevelWidth = levelWidth + blockWidth - 1 & ~(blockWidth - 1), alignedLevelHeight = levelHeight + blockHeight - 1 & ~(blockHeight - 1), levelSize = alignedLevelWidth * alignedLevelHeight * INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[format];
    for (let i = 0; i < levels; i++)
      buffers[i] = {
        levelID: i,
        levelWidth: levels > 1 ? levelWidth : alignedLevelWidth,
        levelHeight: levels > 1 ? levelHeight : alignedLevelHeight,
        levelBuffer: new Uint8Array(buffer.buffer, offset, levelSize)
      }, offset += levelSize, levelWidth = levelWidth >> 1 || 1, levelHeight = levelHeight >> 1 || 1, alignedLevelWidth = levelWidth + blockWidth - 1 & ~(blockWidth - 1), alignedLevelHeight = levelHeight + blockHeight - 1 & ~(blockHeight - 1), levelSize = alignedLevelWidth * alignedLevelHeight * INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[format];
    return buffers;
  }
};

// node_modules/@pixi/compressed-textures/lib/parsers/parseDDS.mjs
var DDS_MAGIC_SIZE = 4;
var DDS_HEADER_SIZE = 124;
var DDS_HEADER_PF_SIZE = 32;
var DDS_HEADER_DX10_SIZE = 20;
var DDS_MAGIC = 542327876;
var DDS_FIELDS = {
  SIZE: 1,
  FLAGS: 2,
  HEIGHT: 3,
  WIDTH: 4,
  MIPMAP_COUNT: 7,
  PIXEL_FORMAT: 19
};
var DDS_PF_FIELDS = {
  SIZE: 0,
  FLAGS: 1,
  FOURCC: 2,
  RGB_BITCOUNT: 3,
  R_BIT_MASK: 4,
  G_BIT_MASK: 5,
  B_BIT_MASK: 6,
  A_BIT_MASK: 7
};
var DDS_DX10_FIELDS = {
  DXGI_FORMAT: 0,
  RESOURCE_DIMENSION: 1,
  MISC_FLAG: 2,
  ARRAY_SIZE: 3,
  MISC_FLAGS2: 4
};
var PF_FLAGS = 1;
var DDPF_ALPHA = 2;
var DDPF_FOURCC = 4;
var DDPF_RGB = 64;
var DDPF_YUV = 512;
var DDPF_LUMINANCE = 131072;
var FOURCC_DXT1 = 827611204;
var FOURCC_DXT3 = 861165636;
var FOURCC_DXT5 = 894720068;
var FOURCC_DX10 = 808540228;
var DDS_RESOURCE_MISC_TEXTURECUBE = 4;
var FOURCC_TO_FORMAT = {
  [FOURCC_DXT1]: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [FOURCC_DXT3]: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [FOURCC_DXT5]: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT
};
var DXGI_TO_FORMAT = {
  // WEBGL_compressed_texture_s3tc
  70: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  71: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  73: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  74: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  76: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  77: INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  // WEBGL_compressed_texture_s3tc_srgb
  72: INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
  75: INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
  78: INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
  // EXT_texture_compression_bptc
  // BC6H
  96: INTERNAL_FORMATS.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
  95: INTERNAL_FORMATS.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
  // BC7
  98: INTERNAL_FORMATS.COMPRESSED_RGBA_BPTC_UNORM_EXT,
  99: INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
};
function parseDDS(arrayBuffer) {
  const data = new Uint32Array(arrayBuffer);
  if (data[0] !== DDS_MAGIC)
    throw new Error("Invalid DDS file magic word");
  const header = new Uint32Array(arrayBuffer, 0, DDS_HEADER_SIZE / Uint32Array.BYTES_PER_ELEMENT), height = header[DDS_FIELDS.HEIGHT], width = header[DDS_FIELDS.WIDTH], mipmapCount = header[DDS_FIELDS.MIPMAP_COUNT], pixelFormat = new Uint32Array(
    arrayBuffer,
    DDS_FIELDS.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,
    DDS_HEADER_PF_SIZE / Uint32Array.BYTES_PER_ELEMENT
  ), formatFlags = pixelFormat[PF_FLAGS];
  if (formatFlags & DDPF_FOURCC) {
    const fourCC = pixelFormat[DDS_PF_FIELDS.FOURCC];
    if (fourCC !== FOURCC_DX10) {
      const internalFormat2 = FOURCC_TO_FORMAT[fourCC], dataOffset2 = DDS_MAGIC_SIZE + DDS_HEADER_SIZE, texData = new Uint8Array(arrayBuffer, dataOffset2);
      return [new CompressedTextureResource(texData, {
        format: internalFormat2,
        width,
        height,
        levels: mipmapCount
        // CompressedTextureResource will separate the levelBuffers for us!
      })];
    }
    const dx10Offset = DDS_MAGIC_SIZE + DDS_HEADER_SIZE, dx10Header = new Uint32Array(
      data.buffer,
      dx10Offset,
      DDS_HEADER_DX10_SIZE / Uint32Array.BYTES_PER_ELEMENT
    ), dxgiFormat = dx10Header[DDS_DX10_FIELDS.DXGI_FORMAT], resourceDimension = dx10Header[DDS_DX10_FIELDS.RESOURCE_DIMENSION], miscFlag = dx10Header[DDS_DX10_FIELDS.MISC_FLAG], arraySize = dx10Header[DDS_DX10_FIELDS.ARRAY_SIZE], internalFormat = DXGI_TO_FORMAT[dxgiFormat];
    if (internalFormat === void 0)
      throw new Error(`DDSParser cannot parse texture data with DXGI format ${dxgiFormat}`);
    if (miscFlag === DDS_RESOURCE_MISC_TEXTURECUBE)
      throw new Error("DDSParser does not support cubemap textures");
    if (resourceDimension === 6)
      throw new Error("DDSParser does not supported 3D texture data");
    const imageBuffers = new Array(), dataOffset = DDS_MAGIC_SIZE + DDS_HEADER_SIZE + DDS_HEADER_DX10_SIZE;
    if (arraySize === 1)
      imageBuffers.push(new Uint8Array(arrayBuffer, dataOffset));
    else {
      const pixelSize = INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[internalFormat];
      let imageSize = 0, levelWidth = width, levelHeight = height;
      for (let i = 0; i < mipmapCount; i++) {
        const alignedLevelWidth = Math.max(1, levelWidth + 3 & -4), alignedLevelHeight = Math.max(1, levelHeight + 3 & -4), levelSize = alignedLevelWidth * alignedLevelHeight * pixelSize;
        imageSize += levelSize, levelWidth = levelWidth >>> 1, levelHeight = levelHeight >>> 1;
      }
      let imageOffset = dataOffset;
      for (let i = 0; i < arraySize; i++)
        imageBuffers.push(new Uint8Array(arrayBuffer, imageOffset, imageSize)), imageOffset += imageSize;
    }
    return imageBuffers.map((buffer) => new CompressedTextureResource(buffer, {
      format: internalFormat,
      width,
      height,
      levels: mipmapCount
    }));
  }
  throw formatFlags & DDPF_RGB ? new Error("DDSParser does not support uncompressed texture data.") : formatFlags & DDPF_YUV ? new Error("DDSParser does not supported YUV uncompressed texture data.") : formatFlags & DDPF_LUMINANCE ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : formatFlags & DDPF_ALPHA ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
}

// node_modules/@pixi/compressed-textures/lib/parsers/parseKTX.mjs
var FILE_IDENTIFIER = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10];
var ENDIANNESS = 67305985;
var KTX_FIELDS = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
};
var FILE_HEADER_SIZE = 64;
var TYPES_TO_BYTES_PER_COMPONENT = {
  [TYPES.UNSIGNED_BYTE]: 1,
  [TYPES.UNSIGNED_SHORT]: 2,
  [TYPES.INT]: 4,
  [TYPES.UNSIGNED_INT]: 4,
  [TYPES.FLOAT]: 4,
  [TYPES.HALF_FLOAT]: 8
};
var FORMATS_TO_COMPONENTS = {
  [FORMATS.RGBA]: 4,
  [FORMATS.RGB]: 3,
  [FORMATS.RG]: 2,
  [FORMATS.RED]: 1,
  [FORMATS.LUMINANCE]: 1,
  [FORMATS.LUMINANCE_ALPHA]: 2,
  [FORMATS.ALPHA]: 1
};
var TYPES_TO_BYTES_PER_PIXEL = {
  [TYPES.UNSIGNED_SHORT_4_4_4_4]: 2,
  [TYPES.UNSIGNED_SHORT_5_5_5_1]: 2,
  [TYPES.UNSIGNED_SHORT_5_6_5]: 2
};
function parseKTX(url, arrayBuffer, loadKeyValueData = false) {
  const dataView = new DataView(arrayBuffer);
  if (!validate(url, dataView))
    return null;
  const littleEndian = dataView.getUint32(KTX_FIELDS.ENDIANNESS, true) === ENDIANNESS, glType = dataView.getUint32(KTX_FIELDS.GL_TYPE, littleEndian), glFormat = dataView.getUint32(KTX_FIELDS.GL_FORMAT, littleEndian), glInternalFormat = dataView.getUint32(KTX_FIELDS.GL_INTERNAL_FORMAT, littleEndian), pixelWidth = dataView.getUint32(KTX_FIELDS.PIXEL_WIDTH, littleEndian), pixelHeight = dataView.getUint32(KTX_FIELDS.PIXEL_HEIGHT, littleEndian) || 1, pixelDepth = dataView.getUint32(KTX_FIELDS.PIXEL_DEPTH, littleEndian) || 1, numberOfArrayElements = dataView.getUint32(KTX_FIELDS.NUMBER_OF_ARRAY_ELEMENTS, littleEndian) || 1, numberOfFaces = dataView.getUint32(KTX_FIELDS.NUMBER_OF_FACES, littleEndian), numberOfMipmapLevels = dataView.getUint32(KTX_FIELDS.NUMBER_OF_MIPMAP_LEVELS, littleEndian), bytesOfKeyValueData = dataView.getUint32(KTX_FIELDS.BYTES_OF_KEY_VALUE_DATA, littleEndian);
  if (pixelHeight === 0 || pixelDepth !== 1)
    throw new Error("Only 2D textures are supported");
  if (numberOfFaces !== 1)
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (numberOfArrayElements !== 1)
    throw new Error("WebGL does not support array textures");
  const blockWidth = 4, blockHeight = 4, alignedWidth = pixelWidth + 3 & -4, alignedHeight = pixelHeight + 3 & -4, imageBuffers = new Array(numberOfArrayElements);
  let imagePixels = pixelWidth * pixelHeight;
  glType === 0 && (imagePixels = alignedWidth * alignedHeight);
  let imagePixelByteSize;
  if (glType !== 0 ? TYPES_TO_BYTES_PER_COMPONENT[glType] ? imagePixelByteSize = TYPES_TO_BYTES_PER_COMPONENT[glType] * FORMATS_TO_COMPONENTS[glFormat] : imagePixelByteSize = TYPES_TO_BYTES_PER_PIXEL[glType] : imagePixelByteSize = INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[glInternalFormat], imagePixelByteSize === void 0)
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  const kvData = loadKeyValueData ? parseKvData(dataView, bytesOfKeyValueData, littleEndian) : null;
  let mipByteSize = imagePixels * imagePixelByteSize, mipWidth = pixelWidth, mipHeight = pixelHeight, alignedMipWidth = alignedWidth, alignedMipHeight = alignedHeight, imageOffset = FILE_HEADER_SIZE + bytesOfKeyValueData;
  for (let mipmapLevel = 0; mipmapLevel < numberOfMipmapLevels; mipmapLevel++) {
    const imageSize = dataView.getUint32(imageOffset, littleEndian);
    let elementOffset = imageOffset + 4;
    for (let arrayElement = 0; arrayElement < numberOfArrayElements; arrayElement++) {
      let mips = imageBuffers[arrayElement];
      mips || (mips = imageBuffers[arrayElement] = new Array(numberOfMipmapLevels)), mips[mipmapLevel] = {
        levelID: mipmapLevel,
        // don't align mipWidth when texture not compressed! (glType not zero)
        levelWidth: numberOfMipmapLevels > 1 || glType !== 0 ? mipWidth : alignedMipWidth,
        levelHeight: numberOfMipmapLevels > 1 || glType !== 0 ? mipHeight : alignedMipHeight,
        levelBuffer: new Uint8Array(arrayBuffer, elementOffset, mipByteSize)
      }, elementOffset += mipByteSize;
    }
    imageOffset += imageSize + 4, imageOffset = imageOffset % 4 !== 0 ? imageOffset + 4 - imageOffset % 4 : imageOffset, mipWidth = mipWidth >> 1 || 1, mipHeight = mipHeight >> 1 || 1, alignedMipWidth = mipWidth + blockWidth - 1 & ~(blockWidth - 1), alignedMipHeight = mipHeight + blockHeight - 1 & ~(blockHeight - 1), mipByteSize = alignedMipWidth * alignedMipHeight * imagePixelByteSize;
  }
  return glType !== 0 ? {
    uncompressed: imageBuffers.map((levelBuffers) => {
      let buffer = levelBuffers[0].levelBuffer, convertToInt = false;
      return glType === TYPES.FLOAT ? buffer = new Float32Array(
        levelBuffers[0].levelBuffer.buffer,
        levelBuffers[0].levelBuffer.byteOffset,
        levelBuffers[0].levelBuffer.byteLength / 4
      ) : glType === TYPES.UNSIGNED_INT ? (convertToInt = true, buffer = new Uint32Array(
        levelBuffers[0].levelBuffer.buffer,
        levelBuffers[0].levelBuffer.byteOffset,
        levelBuffers[0].levelBuffer.byteLength / 4
      )) : glType === TYPES.INT && (convertToInt = true, buffer = new Int32Array(
        levelBuffers[0].levelBuffer.buffer,
        levelBuffers[0].levelBuffer.byteOffset,
        levelBuffers[0].levelBuffer.byteLength / 4
      )), {
        resource: new BufferResource(
          buffer,
          {
            width: levelBuffers[0].levelWidth,
            height: levelBuffers[0].levelHeight
          }
        ),
        type: glType,
        format: convertToInt ? convertFormatToInteger(glFormat) : glFormat
      };
    }),
    kvData
  } : {
    compressed: imageBuffers.map((levelBuffers) => new CompressedTextureResource(null, {
      format: glInternalFormat,
      width: pixelWidth,
      height: pixelHeight,
      levels: numberOfMipmapLevels,
      levelBuffers
    })),
    kvData
  };
}
function validate(url, dataView) {
  for (let i = 0; i < FILE_IDENTIFIER.length; i++)
    if (dataView.getUint8(i) !== FILE_IDENTIFIER[i])
      return console.error(`${url} is not a valid *.ktx file!`), false;
  return true;
}
function convertFormatToInteger(format) {
  switch (format) {
    case FORMATS.RGBA:
      return FORMATS.RGBA_INTEGER;
    case FORMATS.RGB:
      return FORMATS.RGB_INTEGER;
    case FORMATS.RG:
      return FORMATS.RG_INTEGER;
    case FORMATS.RED:
      return FORMATS.RED_INTEGER;
    default:
      return format;
  }
}
function parseKvData(dataView, bytesOfKeyValueData, littleEndian) {
  const kvData = /* @__PURE__ */ new Map();
  let bytesIntoKeyValueData = 0;
  for (; bytesIntoKeyValueData < bytesOfKeyValueData; ) {
    const keyAndValueByteSize = dataView.getUint32(FILE_HEADER_SIZE + bytesIntoKeyValueData, littleEndian), keyAndValueByteOffset = FILE_HEADER_SIZE + bytesIntoKeyValueData + 4, valuePadding = 3 - (keyAndValueByteSize + 3) % 4;
    if (keyAndValueByteSize === 0 || keyAndValueByteSize > bytesOfKeyValueData - bytesIntoKeyValueData) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let keyNulByte = 0;
    for (; keyNulByte < keyAndValueByteSize && dataView.getUint8(keyAndValueByteOffset + keyNulByte) !== 0; keyNulByte++)
      ;
    if (keyNulByte === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    const key = new TextDecoder().decode(
      new Uint8Array(dataView.buffer, keyAndValueByteOffset, keyNulByte)
    ), value = new DataView(
      dataView.buffer,
      keyAndValueByteOffset + keyNulByte + 1,
      keyAndValueByteSize - keyNulByte - 1
    );
    kvData.set(key, value), bytesIntoKeyValueData += 4 + keyAndValueByteSize + valuePadding;
  }
  return kvData;
}

// node_modules/@pixi/compressed-textures/lib/loaders/loadDDS.mjs
var loadDDS = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High
  },
  name: "loadDDS",
  test(url) {
    return checkExtension(url, ".dds");
  },
  async load(url, asset, loader) {
    const arrayBuffer = await (await settings.ADAPTER.fetch(url)).arrayBuffer(), textures = parseDDS(arrayBuffer).map((resource) => {
      const base = new BaseTexture(resource, {
        mipmap: MIPMAP_MODES.OFF,
        alphaMode: ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,
        resolution: lib_exports.getResolutionOfUrl(url),
        ...asset.data
      });
      return createTexture(base, loader, url);
    });
    return textures.length === 1 ? textures[0] : textures;
  },
  unload(texture) {
    Array.isArray(texture) ? texture.forEach((t) => t.destroy(true)) : texture.destroy(true);
  }
};
extensions.add(loadDDS);

// node_modules/@pixi/compressed-textures/lib/loaders/loadKTX.mjs
var loadKTX = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.High
  },
  name: "loadKTX",
  test(url) {
    return checkExtension(url, ".ktx");
  },
  async load(url, asset, loader) {
    const arrayBuffer = await (await settings.ADAPTER.fetch(url)).arrayBuffer(), { compressed, uncompressed, kvData } = parseKTX(url, arrayBuffer), resources = compressed ?? uncompressed, options = {
      mipmap: MIPMAP_MODES.OFF,
      alphaMode: ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,
      resolution: lib_exports.getResolutionOfUrl(url),
      ...asset.data
    }, textures = resources.map((resource) => {
      resources === uncompressed && Object.assign(options, {
        type: resource.type,
        format: resource.format
      });
      const res = resource.resource ?? resource, base = new BaseTexture(res, options);
      return base.ktxKeyValueData = kvData, createTexture(base, loader, url);
    });
    return textures.length === 1 ? textures[0] : textures;
  },
  unload(texture) {
    Array.isArray(texture) ? texture.forEach((t) => t.destroy(true)) : texture.destroy(true);
  }
};
extensions.add(loadKTX);

// node_modules/@pixi/compressed-textures/lib/loaders/resolveCompressedTextureUrl.mjs
var resolveCompressedTextureUrl = {
  extension: ExtensionType.ResolveParser,
  test: (value) => {
    const extension = lib_exports.path.extname(value).slice(1);
    return ["basis", "ktx", "dds"].includes(extension);
  },
  parse: (value) => {
    var _a, _b;
    const extension = lib_exports.path.extname(value).slice(1);
    if (extension === "ktx") {
      const extensions22 = [
        ".s3tc.ktx",
        ".s3tc_sRGB.ktx",
        ".etc.ktx",
        ".etc1.ktx",
        ".pvrt.ktx",
        ".atc.ktx",
        ".astc.ktx",
        ".bptc.ktx"
      ];
      if (extensions22.some((ext) => value.endsWith(ext)))
        return {
          resolution: parseFloat(((_a = settings.RETINA_PREFIX.exec(value)) == null ? void 0 : _a[1]) ?? "1"),
          format: extensions22.find((ext) => value.endsWith(ext)),
          src: value
        };
    }
    return {
      resolution: parseFloat(((_b = settings.RETINA_PREFIX.exec(value)) == null ? void 0 : _b[1]) ?? "1"),
      format: extension,
      src: value
    };
  }
};
extensions.add(resolveCompressedTextureUrl);

// node_modules/@pixi/extract/lib/Extract.mjs
var TEMP_RECT = new Rectangle();
var BYTES_PER_PIXEL = 4;
var _Extract = class _Extract2 {
  /**
   * @param renderer - A reference to the current renderer
   */
  constructor(renderer) {
    this.renderer = renderer, this._rendererPremultipliedAlpha = false;
  }
  contextChange() {
    var _a;
    const attributes = (_a = this.renderer) == null ? void 0 : _a.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(attributes && attributes.alpha && attributes.premultipliedAlpha);
  }
  /**
   * Will return a HTML Image of the target
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param format - Image format, e.g. "image/jpeg" or "image/webp".
   * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
   * @param frame - The frame the extraction is restricted to.
   * @returns - HTML Image of the target
   */
  async image(target, format, quality, frame) {
    const image = new Image();
    return image.src = await this.base64(target, format, quality, frame), image;
  }
  /**
   * Will return a base64 encoded string of this target. It works by calling
   *  `Extract.canvas` and then running toDataURL on that.
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param format - Image format, e.g. "image/jpeg" or "image/webp".
   * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
   * @param frame - The frame the extraction is restricted to.
   * @returns - A base64 encoded string of the texture.
   */
  async base64(target, format, quality, frame) {
    const canvas = this.canvas(target, frame);
    if (canvas.toBlob !== void 0)
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("ICanvas.toBlob failed!"));
            return;
          }
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result), reader.onerror = reject, reader.readAsDataURL(blob);
        }, format, quality);
      });
    if (canvas.toDataURL !== void 0)
      return canvas.toDataURL(format, quality);
    if (canvas.convertToBlob !== void 0) {
      const blob = await canvas.convertToBlob({ type: format, quality });
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result), reader.onerror = reject, reader.readAsDataURL(blob);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
  }
  /**
   * Creates a Canvas element, renders this target to it and then returns it.
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param frame - The frame the extraction is restricted to.
   * @returns - A Canvas element with the texture rendered on.
   */
  canvas(target, frame) {
    const { pixels, width, height, flipY, premultipliedAlpha } = this._rawPixels(target, frame);
    flipY && _Extract2._flipY(pixels, width, height), premultipliedAlpha && _Extract2._unpremultiplyAlpha(pixels);
    const canvasBuffer = new lib_exports.CanvasRenderTarget(width, height, 1), imageData = new ImageData(new Uint8ClampedArray(pixels.buffer), width, height);
    return canvasBuffer.context.putImageData(imageData, 0, 0), canvasBuffer.canvas;
  }
  /**
   * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
   * order, with integer values between 0 and 255 (included).
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param frame - The frame the extraction is restricted to.
   * @returns - One-dimensional array containing the pixel data of the entire texture
   */
  pixels(target, frame) {
    const { pixels, width, height, flipY, premultipliedAlpha } = this._rawPixels(target, frame);
    return flipY && _Extract2._flipY(pixels, width, height), premultipliedAlpha && _Extract2._unpremultiplyAlpha(pixels), pixels;
  }
  _rawPixels(target, frame) {
    const renderer = this.renderer;
    if (!renderer)
      throw new Error("The Extract has already been destroyed");
    let resolution, flipY = false, premultipliedAlpha = false, renderTexture, generated = false;
    target && (target instanceof RenderTexture ? renderTexture = target : (renderTexture = renderer.generateTexture(target, {
      region: frame,
      resolution: renderer.resolution,
      multisample: renderer.multisample
    }), generated = true, frame && (TEMP_RECT.width = frame.width, TEMP_RECT.height = frame.height, frame = TEMP_RECT)));
    const gl = renderer.gl;
    if (renderTexture) {
      if (resolution = renderTexture.baseTexture.resolution, frame = frame ?? renderTexture.frame, flipY = false, premultipliedAlpha = renderTexture.baseTexture.alphaMode > 0 && renderTexture.baseTexture.format === FORMATS.RGBA, !generated) {
        renderer.renderTexture.bind(renderTexture);
        const fbo = renderTexture.framebuffer.glFramebuffers[renderer.CONTEXT_UID];
        fbo.blitFramebuffer && renderer.framebuffer.bind(fbo.blitFramebuffer);
      }
    } else
      resolution = renderer.resolution, frame || (frame = TEMP_RECT, frame.width = renderer.width / resolution, frame.height = renderer.height / resolution), flipY = true, premultipliedAlpha = this._rendererPremultipliedAlpha, renderer.renderTexture.bind();
    const width = Math.max(Math.round(frame.width * resolution), 1), height = Math.max(Math.round(frame.height * resolution), 1), pixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
    return gl.readPixels(
      Math.round(frame.x * resolution),
      Math.round(frame.y * resolution),
      width,
      height,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels
    ), generated && (renderTexture == null ? void 0 : renderTexture.destroy(true)), { pixels, width, height, flipY, premultipliedAlpha };
  }
  /** Destroys the extract. */
  destroy() {
    this.renderer = null;
  }
  static _flipY(pixels, width, height) {
    const w = width << 2, h = height >> 1, temp = new Uint8Array(w);
    for (let y = 0; y < h; y++) {
      const t = y * w, b = (height - y - 1) * w;
      temp.set(pixels.subarray(t, t + w)), pixels.copyWithin(t, b, b + w), pixels.set(temp, b);
    }
  }
  static _unpremultiplyAlpha(pixels) {
    pixels instanceof Uint8ClampedArray && (pixels = new Uint8Array(pixels.buffer));
    const n = pixels.length;
    for (let i = 0; i < n; i += 4) {
      const alpha = pixels[i + 3];
      if (alpha !== 0) {
        const a = 255.001 / alpha;
        pixels[i] = pixels[i] * a + 0.5, pixels[i + 1] = pixels[i + 1] * a + 0.5, pixels[i + 2] = pixels[i + 2] * a + 0.5;
      }
    }
  }
};
_Extract.extension = {
  name: "extract",
  type: ExtensionType.RendererSystem
};
var Extract = _Extract;
extensions.add(Extract);

// node_modules/@pixi/particle-container/lib/ParticleContainer.mjs
var ParticleContainer = class extends Container {
  /**
   * @param maxSize - The maximum number of particles that can be rendered by the container.
   *  Affects size of allocated buffers.
   * @param properties - The properties of children that should be uploaded to the gpu and applied.
   * @param {boolean} [properties.vertices=false] - When true, vertices be uploaded and applied.
   *                  if sprite's ` scale/anchor/trim/frame/orig` is dynamic, please set `true`.
   * @param {boolean} [properties.position=true] - When true, position be uploaded and applied.
   * @param {boolean} [properties.rotation=false] - When true, rotation be uploaded and applied.
   * @param {boolean} [properties.uvs=false] - When true, uvs be uploaded and applied.
   * @param {boolean} [properties.tint=false] - When true, alpha and tint be uploaded and applied.
   * @param {number} [batchSize=16384] - Number of particles per batch. If less than maxSize, it uses maxSize instead.
   * @param {boolean} [autoResize=false] - If true, container allocates more batches in case
   *  there are more than `maxSize` particles.
   */
  constructor(maxSize = 1500, properties, batchSize = 16384, autoResize = false) {
    super();
    const maxBatchSize = 16384;
    batchSize > maxBatchSize && (batchSize = maxBatchSize), this._properties = [false, true, false, false, false], this._maxSize = maxSize, this._batchSize = batchSize, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = false, this.blendMode = BLEND_MODES.NORMAL, this.autoResize = autoResize, this.roundPixels = true, this.baseTexture = null, this.setProperties(properties), this._tintColor = new Color(0), this.tintRgb = new Float32Array(3), this.tint = 16777215;
  }
  /**
   * Sets the private properties array to dynamic / static based on the passed properties object
   * @param properties - The properties to be uploaded
   */
  setProperties(properties) {
    properties && (this._properties[0] = "vertices" in properties || "scale" in properties ? !!properties.vertices || !!properties.scale : this._properties[0], this._properties[1] = "position" in properties ? !!properties.position : this._properties[1], this._properties[2] = "rotation" in properties ? !!properties.rotation : this._properties[2], this._properties[3] = "uvs" in properties ? !!properties.uvs : this._properties[3], this._properties[4] = "tint" in properties || "alpha" in properties ? !!properties.tint || !!properties.alpha : this._properties[4]);
  }
  updateTransform() {
    this.displayObjectUpdateTransform();
  }
  /**
   * The tint applied to the container. This is a hex value.
   * A value of 0xFFFFFF will remove any tint effect.
   * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
   * @default 0xFFFFFF
   */
  get tint() {
    return this._tintColor.value;
  }
  set tint(value) {
    this._tintColor.setValue(value), this._tintColor.toRgbArray(this.tintRgb);
  }
  /**
   * Renders the container using the WebGL renderer.
   * @param renderer - The WebGL renderer.
   */
  render(renderer) {
    !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", () => this.onChildrenChange(0))), renderer.batch.setObjectRenderer(renderer.plugins.particle), renderer.plugins.particle.render(this));
  }
  /**
   * Set the flag that static data should be updated to true
   * @param smallestChildIndex - The smallest child index.
   */
  onChildrenChange(smallestChildIndex) {
    const bufferIndex = Math.floor(smallestChildIndex / this._batchSize);
    for (; this._bufferUpdateIDs.length < bufferIndex; )
      this._bufferUpdateIDs.push(0);
    this._bufferUpdateIDs[bufferIndex] = ++this._updateID;
  }
  dispose() {
    if (this._buffers) {
      for (let i = 0; i < this._buffers.length; ++i)
        this._buffers[i].destroy();
      this._buffers = null;
    }
  }
  /**
   * Destroys the container
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their
   *  destroy method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the texture of the child sprite
   * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the base texture of the child sprite
   */
  destroy(options) {
    super.destroy(options), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null;
  }
};

// node_modules/@pixi/particle-container/lib/ParticleBuffer.mjs
var ParticleBuffer = class {
  /**
   * @param {object} properties - The properties to upload.
   * @param {boolean[]} dynamicPropertyFlags - Flags for which properties are dynamic.
   * @param {number} size - The size of the batch.
   */
  constructor(properties, dynamicPropertyFlags, size) {
    this.geometry = new Geometry(), this.indexBuffer = null, this.size = size, this.dynamicProperties = [], this.staticProperties = [];
    for (let i = 0; i < properties.length; ++i) {
      let property = properties[i];
      property = {
        attributeName: property.attributeName,
        size: property.size,
        uploadFunction: property.uploadFunction,
        type: property.type || TYPES.FLOAT,
        offset: property.offset
      }, dynamicPropertyFlags[i] ? this.dynamicProperties.push(property) : this.staticProperties.push(property);
    }
    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
  }
  /** Sets up the renderer context and necessary buffers. */
  initBuffers() {
    const geometry = this.geometry;
    let dynamicOffset = 0;
    this.indexBuffer = new Buffer(lib_exports.createIndicesForQuads(this.size), true, true), geometry.addIndex(this.indexBuffer), this.dynamicStride = 0;
    for (let i = 0; i < this.dynamicProperties.length; ++i) {
      const property = this.dynamicProperties[i];
      property.offset = dynamicOffset, dynamicOffset += property.size, this.dynamicStride += property.size;
    }
    const dynBuffer = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    this.dynamicData = new Float32Array(dynBuffer), this.dynamicDataUint32 = new Uint32Array(dynBuffer), this.dynamicBuffer = new Buffer(this.dynamicData, false, false);
    let staticOffset = 0;
    this.staticStride = 0;
    for (let i = 0; i < this.staticProperties.length; ++i) {
      const property = this.staticProperties[i];
      property.offset = staticOffset, staticOffset += property.size, this.staticStride += property.size;
    }
    const statBuffer = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    this.staticData = new Float32Array(statBuffer), this.staticDataUint32 = new Uint32Array(statBuffer), this.staticBuffer = new Buffer(this.staticData, true, false);
    for (let i = 0; i < this.dynamicProperties.length; ++i) {
      const property = this.dynamicProperties[i];
      geometry.addAttribute(
        property.attributeName,
        this.dynamicBuffer,
        0,
        property.type === TYPES.UNSIGNED_BYTE,
        property.type,
        this.dynamicStride * 4,
        property.offset * 4
      );
    }
    for (let i = 0; i < this.staticProperties.length; ++i) {
      const property = this.staticProperties[i];
      geometry.addAttribute(
        property.attributeName,
        this.staticBuffer,
        0,
        property.type === TYPES.UNSIGNED_BYTE,
        property.type,
        this.staticStride * 4,
        property.offset * 4
      );
    }
  }
  /**
   * Uploads the dynamic properties.
   * @param children - The children to upload.
   * @param startIndex - The index to start at.
   * @param amount - The number to upload.
   */
  uploadDynamic(children, startIndex, amount) {
    for (let i = 0; i < this.dynamicProperties.length; i++) {
      const property = this.dynamicProperties[i];
      property.uploadFunction(
        children,
        startIndex,
        amount,
        property.type === TYPES.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData,
        this.dynamicStride,
        property.offset
      );
    }
    this.dynamicBuffer._updateID++;
  }
  /**
   * Uploads the static properties.
   * @param children - The children to upload.
   * @param startIndex - The index to start at.
   * @param amount - The number to upload.
   */
  uploadStatic(children, startIndex, amount) {
    for (let i = 0; i < this.staticProperties.length; i++) {
      const property = this.staticProperties[i];
      property.uploadFunction(
        children,
        startIndex,
        amount,
        property.type === TYPES.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
        this.staticStride,
        property.offset
      );
    }
    this.staticBuffer._updateID++;
  }
  /** Destroys the ParticleBuffer. */
  destroy() {
    this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
  }
};

// node_modules/@pixi/particle-container/lib/particles.frag.mjs
var fragment6 = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`;

// node_modules/@pixi/particle-container/lib/particles.vert.mjs
var vertex3 = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;

// node_modules/@pixi/particle-container/lib/ParticleRenderer.mjs
var ParticleRenderer = class extends ObjectRenderer {
  /**
   * @param renderer - The renderer this sprite batch works for.
   */
  constructor(renderer) {
    super(renderer), this.shader = null, this.properties = null, this.tempMatrix = new Matrix(), this.properties = [
      // verticesData
      {
        attributeName: "aVertexPosition",
        size: 2,
        uploadFunction: this.uploadVertices,
        offset: 0
      },
      // positionData
      {
        attributeName: "aPositionCoord",
        size: 2,
        uploadFunction: this.uploadPosition,
        offset: 0
      },
      // rotationData
      {
        attributeName: "aRotation",
        size: 1,
        uploadFunction: this.uploadRotation,
        offset: 0
      },
      // uvsData
      {
        attributeName: "aTextureCoord",
        size: 2,
        uploadFunction: this.uploadUvs,
        offset: 0
      },
      // tintData
      {
        attributeName: "aColor",
        size: 1,
        type: TYPES.UNSIGNED_BYTE,
        uploadFunction: this.uploadTint,
        offset: 0
      }
    ], this.shader = Shader.from(vertex3, fragment6, {}), this.state = State.for2d();
  }
  /**
   * Renders the particle container object.
   * @param container - The container to render using this ParticleRenderer.
   */
  render(container) {
    const children = container.children, maxSize = container._maxSize, batchSize = container._batchSize, renderer = this.renderer;
    let totalChildren = children.length;
    if (totalChildren === 0)
      return;
    totalChildren > maxSize && !container.autoResize && (totalChildren = maxSize);
    let buffers = container._buffers;
    buffers || (buffers = container._buffers = this.generateBuffers(container));
    const baseTexture = children[0]._texture.baseTexture, premultiplied = baseTexture.alphaMode > 0;
    this.state.blendMode = lib_exports.correctBlendMode(container.blendMode, premultiplied), renderer.state.set(this.state);
    const gl = renderer.gl, m = container.worldTransform.copyTo(this.tempMatrix);
    m.prepend(renderer.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = m.toArray(true), this.shader.uniforms.uColor = Color.shared.setValue(container.tintRgb).premultiply(container.worldAlpha, premultiplied).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = baseTexture, this.renderer.shader.bind(this.shader);
    let updateStatic = false;
    for (let i = 0, j = 0; i < totalChildren; i += batchSize, j += 1) {
      let amount = totalChildren - i;
      amount > batchSize && (amount = batchSize), j >= buffers.length && buffers.push(this._generateOneMoreBuffer(container));
      const buffer = buffers[j];
      buffer.uploadDynamic(children, i, amount);
      const bid = container._bufferUpdateIDs[j] || 0;
      updateStatic = updateStatic || buffer._updateID < bid, updateStatic && (buffer._updateID = container._updateID, buffer.uploadStatic(children, i, amount)), renderer.geometry.bind(buffer.geometry), gl.drawElements(gl.TRIANGLES, amount * 6, gl.UNSIGNED_SHORT, 0);
    }
  }
  /**
   * Creates one particle buffer for each child in the container we want to render and updates internal properties.
   * @param container - The container to render using this ParticleRenderer
   * @returns - The buffers
   */
  generateBuffers(container) {
    const buffers = [], size = container._maxSize, batchSize = container._batchSize, dynamicPropertyFlags = container._properties;
    for (let i = 0; i < size; i += batchSize)
      buffers.push(new ParticleBuffer(this.properties, dynamicPropertyFlags, batchSize));
    return buffers;
  }
  /**
   * Creates one more particle buffer, because container has autoResize feature.
   * @param container - The container to render using this ParticleRenderer
   * @returns - The generated buffer
   */
  _generateOneMoreBuffer(container) {
    const batchSize = container._batchSize, dynamicPropertyFlags = container._properties;
    return new ParticleBuffer(this.properties, dynamicPropertyFlags, batchSize);
  }
  /**
   * Uploads the vertices.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their vertices uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadVertices(children, startIndex, amount, array, stride, offset) {
    let w0 = 0, w1 = 0, h0 = 0, h1 = 0;
    for (let i = 0; i < amount; ++i) {
      const sprite = children[startIndex + i], texture = sprite._texture, sx = sprite.scale.x, sy = sprite.scale.y, trim = texture.trim, orig = texture.orig;
      trim ? (w1 = trim.x - sprite.anchor.x * orig.width, w0 = w1 + trim.width, h1 = trim.y - sprite.anchor.y * orig.height, h0 = h1 + trim.height) : (w0 = orig.width * (1 - sprite.anchor.x), w1 = orig.width * -sprite.anchor.x, h0 = orig.height * (1 - sprite.anchor.y), h1 = orig.height * -sprite.anchor.y), array[offset] = w1 * sx, array[offset + 1] = h1 * sy, array[offset + stride] = w0 * sx, array[offset + stride + 1] = h1 * sy, array[offset + stride * 2] = w0 * sx, array[offset + stride * 2 + 1] = h0 * sy, array[offset + stride * 3] = w1 * sx, array[offset + stride * 3 + 1] = h0 * sy, offset += stride * 4;
    }
  }
  /**
   * Uploads the position.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their positions uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadPosition(children, startIndex, amount, array, stride, offset) {
    for (let i = 0; i < amount; i++) {
      const spritePosition = children[startIndex + i].position;
      array[offset] = spritePosition.x, array[offset + 1] = spritePosition.y, array[offset + stride] = spritePosition.x, array[offset + stride + 1] = spritePosition.y, array[offset + stride * 2] = spritePosition.x, array[offset + stride * 2 + 1] = spritePosition.y, array[offset + stride * 3] = spritePosition.x, array[offset + stride * 3 + 1] = spritePosition.y, offset += stride * 4;
    }
  }
  /**
   * Uploads the rotation.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadRotation(children, startIndex, amount, array, stride, offset) {
    for (let i = 0; i < amount; i++) {
      const spriteRotation = children[startIndex + i].rotation;
      array[offset] = spriteRotation, array[offset + stride] = spriteRotation, array[offset + stride * 2] = spriteRotation, array[offset + stride * 3] = spriteRotation, offset += stride * 4;
    }
  }
  /**
   * Uploads the UVs.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadUvs(children, startIndex, amount, array, stride, offset) {
    for (let i = 0; i < amount; ++i) {
      const textureUvs = children[startIndex + i]._texture._uvs;
      textureUvs ? (array[offset] = textureUvs.x0, array[offset + 1] = textureUvs.y0, array[offset + stride] = textureUvs.x1, array[offset + stride + 1] = textureUvs.y1, array[offset + stride * 2] = textureUvs.x2, array[offset + stride * 2 + 1] = textureUvs.y2, array[offset + stride * 3] = textureUvs.x3, array[offset + stride * 3 + 1] = textureUvs.y3, offset += stride * 4) : (array[offset] = 0, array[offset + 1] = 0, array[offset + stride] = 0, array[offset + stride + 1] = 0, array[offset + stride * 2] = 0, array[offset + stride * 2 + 1] = 0, array[offset + stride * 3] = 0, array[offset + stride * 3 + 1] = 0, offset += stride * 4);
    }
  }
  /**
   * Uploads the tint.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadTint(children, startIndex, amount, array, stride, offset) {
    for (let i = 0; i < amount; ++i) {
      const sprite = children[startIndex + i], result = Color.shared.setValue(sprite._tintRGB).toPremultiplied(sprite.alpha, sprite.texture.baseTexture.alphaMode > 0);
      array[offset] = result, array[offset + stride] = result, array[offset + stride * 2] = result, array[offset + stride * 3] = result, offset += stride * 4;
    }
  }
  /** Destroys the ParticleRenderer. */
  destroy() {
    super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
  }
};
ParticleRenderer.extension = {
  name: "particle",
  type: ExtensionType.RendererPlugin
};
extensions.add(ParticleRenderer);

// node_modules/@pixi/prepare/lib/CountLimiter.mjs
var CountLimiter = class {
  /**
   * @param maxItemsPerFrame - The maximum number of items that can be prepared each frame.
   */
  constructor(maxItemsPerFrame) {
    this.maxItemsPerFrame = maxItemsPerFrame, this.itemsLeft = 0;
  }
  /** Resets any counting properties to start fresh on a new frame. */
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  /**
   * Checks to see if another item can be uploaded. This should only be called once per item.
   * @returns If the item is allowed to be uploaded.
   */
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
};

// node_modules/@pixi/prepare/lib/BasePrepare.mjs
function findMultipleBaseTextures(item, queue) {
  var _a;
  let result = false;
  if ((_a = item == null ? void 0 : item._textures) == null ? void 0 : _a.length) {
    for (let i = 0; i < item._textures.length; i++)
      if (item._textures[i] instanceof Texture) {
        const baseTexture = item._textures[i].baseTexture;
        queue.includes(baseTexture) || (queue.push(baseTexture), result = true);
      }
  }
  return result;
}
function findBaseTexture(item, queue) {
  if (item.baseTexture instanceof BaseTexture) {
    const texture = item.baseTexture;
    return queue.includes(texture) || queue.push(texture), true;
  }
  return false;
}
function findTexture(item, queue) {
  if (item._texture && item._texture instanceof Texture) {
    const texture = item._texture.baseTexture;
    return queue.includes(texture) || queue.push(texture), true;
  }
  return false;
}
function drawText(_helper, item) {
  return item instanceof Text ? (item.updateText(true), true) : false;
}
function calculateTextStyle(_helper, item) {
  if (item instanceof TextStyle) {
    const font = item.toFontString();
    return TextMetrics.measureFont(font), true;
  }
  return false;
}
function findText(item, queue) {
  if (item instanceof Text) {
    queue.includes(item.style) || queue.push(item.style), queue.includes(item) || queue.push(item);
    const texture = item._texture.baseTexture;
    return queue.includes(texture) || queue.push(texture), true;
  }
  return false;
}
function findTextStyle(item, queue) {
  return item instanceof TextStyle ? (queue.includes(item) || queue.push(item), true) : false;
}
var _BasePrepare = class _BasePrepare2 {
  /**
   * @param {PIXI.IRenderer} renderer - A reference to the current renderer
   */
  constructor(renderer) {
    this.limiter = new CountLimiter(_BasePrepare2.uploadsPerFrame), this.renderer = renderer, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = false, this.delayedTick = () => {
      this.queue && this.prepareItems();
    }, this.registerFindHook(findText), this.registerFindHook(findTextStyle), this.registerFindHook(findMultipleBaseTextures), this.registerFindHook(findBaseTexture), this.registerFindHook(findTexture), this.registerUploadHook(drawText), this.registerUploadHook(calculateTextStyle);
  }
  /**
   * Upload all the textures and graphics to the GPU.
   * @method PIXI.BasePrepare#upload
   * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text} [item] -
   *        Container or display object to search for items to upload or the items to upload themselves,
   *        or optionally ommitted, if items have been added using {@link PIXI.BasePrepare#add `prepare.add`}.
   */
  upload(item) {
    return new Promise((resolve) => {
      item && this.add(item), this.queue.length ? (this.completes.push(resolve), this.ticking || (this.ticking = true, Ticker.system.addOnce(this.tick, this, UPDATE_PRIORITY.UTILITY))) : resolve();
    });
  }
  /**
   * Handle tick update
   * @private
   */
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  /**
   * Actually prepare items. This is handled outside of the tick because it will take a while
   * and we do NOT want to block the current animation frame from rendering.
   * @private
   */
  prepareItems() {
    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
      const item = this.queue[0];
      let uploaded = false;
      if (item && !item._destroyed) {
        for (let i = 0, len = this.uploadHooks.length; i < len; i++)
          if (this.uploadHooks[i](this.uploadHookHelper, item)) {
            this.queue.shift(), uploaded = true;
            break;
          }
      }
      uploaded || this.queue.shift();
    }
    if (this.queue.length)
      Ticker.system.addOnce(this.tick, this, UPDATE_PRIORITY.UTILITY);
    else {
      this.ticking = false;
      const completes = this.completes.slice(0);
      this.completes.length = 0;
      for (let i = 0, len = completes.length; i < len; i++)
        completes[i]();
    }
  }
  /**
   * Adds hooks for finding items.
   * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
   *          function must return `true` if it was able to add item to the queue.
   * @returns Instance of plugin for chaining.
   */
  registerFindHook(addHook) {
    return addHook && this.addHooks.push(addHook), this;
  }
  /**
   * Adds hooks for uploading items.
   * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
   *          function must return `true` if it was able to handle upload of item.
   * @returns Instance of plugin for chaining.
   */
  registerUploadHook(uploadHook) {
    return uploadHook && this.uploadHooks.push(uploadHook), this;
  }
  /**
   * Manually add an item to the uploading queue.
   * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text|*} item - Object to
   *        add to the queue
   * @returns Instance of plugin for chaining.
   */
  add(item) {
    for (let i = 0, len = this.addHooks.length; i < len && !this.addHooks[i](item, this.queue); i++)
      ;
    if (item instanceof Container)
      for (let i = item.children.length - 1; i >= 0; i--)
        this.add(item.children[i]);
    return this;
  }
  /** Destroys the plugin, don't use after this. */
  destroy() {
    this.ticking && Ticker.system.remove(this.tick, this), this.ticking = false, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
  }
};
_BasePrepare.uploadsPerFrame = 4;
var BasePrepare = _BasePrepare;

// node_modules/@pixi/prepare/lib/settings.mjs
Object.defineProperties(settings, {
  /**
   * Default number of uploads per frame using prepare plugin.
   * @static
   * @memberof PIXI.settings
   * @name UPLOADS_PER_FRAME
   * @deprecated since 7.1.0
   * @see PIXI.BasePrepare.uploadsPerFrame
   * @type {number}
   */
  UPLOADS_PER_FRAME: {
    get() {
      return BasePrepare.uploadsPerFrame;
    },
    set(value) {
      lib_exports.deprecation("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"), BasePrepare.uploadsPerFrame = value;
    }
  }
});

// node_modules/@pixi/prepare/lib/Prepare.mjs
function uploadBaseTextures(renderer, item) {
  return item instanceof BaseTexture ? (item._glTextures[renderer.CONTEXT_UID] || renderer.texture.bind(item), true) : false;
}
function uploadGraphics(renderer, item) {
  if (!(item instanceof Graphics))
    return false;
  const { geometry } = item;
  item.finishPoly(), geometry.updateBatches();
  const { batches } = geometry;
  for (let i = 0; i < batches.length; i++) {
    const { texture } = batches[i].style;
    texture && uploadBaseTextures(renderer, texture.baseTexture);
  }
  return geometry.batchable || renderer.geometry.bind(geometry, item._resolveDirectShader(renderer)), true;
}
function findGraphics(item, queue) {
  return item instanceof Graphics ? (queue.push(item), true) : false;
}
var Prepare = class extends BasePrepare {
  /**
   * @param {PIXI.Renderer} renderer - A reference to the current renderer
   */
  constructor(renderer) {
    super(renderer), this.uploadHookHelper = this.renderer, this.registerFindHook(findGraphics), this.registerUploadHook(uploadBaseTextures), this.registerUploadHook(uploadGraphics);
  }
};
Prepare.extension = {
  name: "prepare",
  type: ExtensionType.RendererSystem
};
extensions.add(Prepare);

// node_modules/@pixi/prepare/lib/TimeLimiter.mjs
var TimeLimiter = class {
  /** @param maxMilliseconds - The maximum milliseconds that can be spent preparing items each frame. */
  constructor(maxMilliseconds) {
    this.maxMilliseconds = maxMilliseconds, this.frameStart = 0;
  }
  /** Resets any counting properties to start fresh on a new frame. */
  beginFrame() {
    this.frameStart = Date.now();
  }
  /**
   * Checks to see if another item can be uploaded. This should only be called once per item.
   * @returns - If the item is allowed to be uploaded.
   */
  allowedToUpload() {
    return Date.now() - this.frameStart < this.maxMilliseconds;
  }
};

// node_modules/@pixi/sprite-animated/lib/AnimatedSprite.mjs
var AnimatedSprite = class _AnimatedSprite extends Sprite {
  /**
   * @param textures - An array of {@link PIXI.Texture} or frame
   *  objects that make up the animation.
   * @param {boolean} [autoUpdate=true] - Whether to use Ticker.shared to auto update animation time.
   */
  constructor(textures, autoUpdate = true) {
    super(textures[0] instanceof Texture ? textures[0] : textures[0].texture), this._textures = null, this._durations = null, this._autoUpdate = autoUpdate, this._isConnectedToTicker = false, this.animationSpeed = 1, this.loop = true, this.updateAnchor = false, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this._playing = false, this._previousFrame = null, this.textures = textures;
  }
  /** Stops the AnimatedSprite. */
  stop() {
    this._playing && (this._playing = false, this._autoUpdate && this._isConnectedToTicker && (Ticker.shared.remove(this.update, this), this._isConnectedToTicker = false));
  }
  /** Plays the AnimatedSprite. */
  play() {
    this._playing || (this._playing = true, this._autoUpdate && !this._isConnectedToTicker && (Ticker.shared.add(this.update, this, UPDATE_PRIORITY.HIGH), this._isConnectedToTicker = true));
  }
  /**
   * Stops the AnimatedSprite and goes to a specific frame.
   * @param frameNumber - Frame index to stop at.
   */
  gotoAndStop(frameNumber) {
    this.stop(), this.currentFrame = frameNumber;
  }
  /**
   * Goes to a specific frame and begins playing the AnimatedSprite.
   * @param frameNumber - Frame index to start at.
   */
  gotoAndPlay(frameNumber) {
    this.currentFrame = frameNumber, this.play();
  }
  /**
   * Updates the object transform for rendering.
   * @param deltaTime - Time since last tick.
   */
  update(deltaTime) {
    if (!this._playing)
      return;
    const elapsed = this.animationSpeed * deltaTime, previousFrame = this.currentFrame;
    if (this._durations !== null) {
      let lag = this._currentTime % 1 * this._durations[this.currentFrame];
      for (lag += elapsed / 60 * 1e3; lag < 0; )
        this._currentTime--, lag += this._durations[this.currentFrame];
      const sign = Math.sign(this.animationSpeed * deltaTime);
      for (this._currentTime = Math.floor(this._currentTime); lag >= this._durations[this.currentFrame]; )
        lag -= this._durations[this.currentFrame] * sign, this._currentTime += sign;
      this._currentTime += lag / this._durations[this.currentFrame];
    } else
      this._currentTime += elapsed;
    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : previousFrame !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < previousFrame || this.animationSpeed < 0 && this.currentFrame > previousFrame) && this.onLoop(), this.updateTexture());
  }
  /** Updates the displayed texture to match the current frame index. */
  updateTexture() {
    const currentFrame = this.currentFrame;
    this._previousFrame !== currentFrame && (this._previousFrame = currentFrame, this._texture = this._textures[currentFrame], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
  }
  /**
   * Stops the AnimatedSprite and destroys it.
   * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
   *  have been set to that value.
   * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy
   *      method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well.
   * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well.
   */
  destroy(options) {
    this.stop(), super.destroy(options), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
  }
  /**
   * A short hand way of creating an AnimatedSprite from an array of frame ids.
   * @param frames - The array of frames ids the AnimatedSprite will use as its texture frames.
   * @returns - The new animated sprite with the specified frames.
   */
  static fromFrames(frames) {
    const textures = [];
    for (let i = 0; i < frames.length; ++i)
      textures.push(Texture.from(frames[i]));
    return new _AnimatedSprite(textures);
  }
  /**
   * A short hand way of creating an AnimatedSprite from an array of image ids.
   * @param images - The array of image urls the AnimatedSprite will use as its texture frames.
   * @returns The new animate sprite with the specified images as frames.
   */
  static fromImages(images) {
    const textures = [];
    for (let i = 0; i < images.length; ++i)
      textures.push(Texture.from(images[i]));
    return new _AnimatedSprite(textures);
  }
  /**
   * The total number of frames in the AnimatedSprite. This is the same as number of textures
   * assigned to the AnimatedSprite.
   * @readonly
   * @default 0
   */
  get totalFrames() {
    return this._textures.length;
  }
  /** The array of textures used for this AnimatedSprite. */
  get textures() {
    return this._textures;
  }
  set textures(value) {
    if (value[0] instanceof Texture)
      this._textures = value, this._durations = null;
    else {
      this._textures = [], this._durations = [];
      for (let i = 0; i < value.length; i++)
        this._textures.push(value[i].texture), this._durations.push(value[i].time);
    }
    this._previousFrame = null, this.gotoAndStop(0), this.updateTexture();
  }
  /** The AnimatedSprite's current frame index. */
  get currentFrame() {
    let currentFrame = Math.floor(this._currentTime) % this._textures.length;
    return currentFrame < 0 && (currentFrame += this._textures.length), currentFrame;
  }
  set currentFrame(value) {
    if (value < 0 || value > this.totalFrames - 1)
      throw new Error(`[AnimatedSprite]: Invalid frame index value ${value}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
    const previousFrame = this.currentFrame;
    this._currentTime = value, previousFrame !== this.currentFrame && this.updateTexture();
  }
  /**
   * Indicates if the AnimatedSprite is currently playing.
   * @readonly
   */
  get playing() {
    return this._playing;
  }
  /** Whether to use Ticker.shared to auto update animation time. */
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(value) {
    value !== this._autoUpdate && (this._autoUpdate = value, !this._autoUpdate && this._isConnectedToTicker ? (Ticker.shared.remove(this.update, this), this._isConnectedToTicker = false) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (Ticker.shared.add(this.update, this), this._isConnectedToTicker = true));
  }
};

// node_modules/@pixi/sprite-tiling/lib/TilingSprite.mjs
var tempPoint = new Point();
var TilingSprite = class _TilingSprite extends Sprite {
  /**
   * Note: The wrap mode of the texture is forced to REPEAT on render if the size of the texture
   * is a power of two, the texture's wrap mode is CLAMP, and the texture hasn't been bound yet.
   * @param texture - The texture of the tiling sprite.
   * @param width - The width of the tiling sprite.
   * @param height - The height of the tiling sprite.
   */
  constructor(texture, width = 100, height = 100) {
    super(texture), this.tileTransform = new Transform(), this._width = width, this._height = height, this.uvMatrix = this.texture.uvMatrix || new TextureMatrix(texture), this.pluginName = "tilingSprite", this.uvRespectAnchor = false;
  }
  /**
   * Changes frame clamping in corresponding textureTransform, shortcut
   * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
   * @default 0.5
   * @member {number}
   */
  get clampMargin() {
    return this.uvMatrix.clampMargin;
  }
  set clampMargin(value) {
    this.uvMatrix.clampMargin = value, this.uvMatrix.update(true);
  }
  /** The scaling of the image that is being tiled. */
  get tileScale() {
    return this.tileTransform.scale;
  }
  set tileScale(value) {
    this.tileTransform.scale.copyFrom(value);
  }
  /** The offset of the image that is being tiled. */
  get tilePosition() {
    return this.tileTransform.position;
  }
  set tilePosition(value) {
    this.tileTransform.position.copyFrom(value);
  }
  /**
   * @protected
   */
  _onTextureUpdate() {
    this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215;
  }
  /**
   * Renders the object using the WebGL renderer
   * @param renderer - The renderer
   */
  _render(renderer) {
    const texture = this._texture;
    !texture || !texture.valid || (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]), renderer.plugins[this.pluginName].render(this));
  }
  /** Updates the bounds of the tiling sprite. */
  _calculateBounds() {
    const minX = this._width * -this._anchor._x, minY = this._height * -this._anchor._y, maxX = this._width * (1 - this._anchor._x), maxY = this._height * (1 - this._anchor._y);
    this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
  }
  /**
   * Gets the local bounds of the sprite object.
   * @param rect - Optional output rectangle.
   * @returns The bounds.
   */
  getLocalBounds(rect) {
    return this.children.length === 0 ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), rect || (this._localBoundsRect || (this._localBoundsRect = new Rectangle()), rect = this._localBoundsRect), this._bounds.getRectangle(rect)) : super.getLocalBounds.call(this, rect);
  }
  /**
   * Checks if a point is inside this tiling sprite.
   * @param point - The point to check.
   * @returns Whether or not the sprite contains the point.
   */
  containsPoint(point) {
    this.worldTransform.applyInverse(point, tempPoint);
    const width = this._width, height = this._height, x1 = -width * this.anchor._x;
    if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
      const y1 = -height * this.anchor._y;
      if (tempPoint.y >= y1 && tempPoint.y < y1 + height)
        return true;
    }
    return false;
  }
  /**
   * Destroys this sprite and optionally its texture and children
   * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
   *      method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
   * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
   */
  destroy(options) {
    super.destroy(options), this.tileTransform = null, this.uvMatrix = null;
  }
  /**
   * Helper function that creates a new tiling sprite based on the source you provide.
   * The source can be - frame id, image url, video url, canvas element, video element, base texture
   * @static
   * @param {string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
   * @param {object} options - See {@link PIXI.BaseTexture}'s constructor for options.
   * @param {number} options.width - required width of the tiling sprite
   * @param {number} options.height - required height of the tiling sprite
   * @returns {PIXI.TilingSprite} The newly created texture
   */
  static from(source, options) {
    const texture = source instanceof Texture ? source : Texture.from(source, options);
    return new _TilingSprite(
      texture,
      options.width,
      options.height
    );
  }
  /** The width of the sprite, setting this will actually modify the scale to achieve the value set. */
  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
  }
  /** The height of the TilingSprite, setting this will actually modify the scale to achieve the value set. */
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }
};

// node_modules/@pixi/sprite-tiling/lib/sprite-tiling.frag.mjs
var gl2FragmentSrc = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`;

// node_modules/@pixi/sprite-tiling/lib/sprite-tiling.vert.mjs
var gl2VertexSrc = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`;

// node_modules/@pixi/sprite-tiling/lib/sprite-tiling-fallback.frag.mjs
var gl1FragmentSrc = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`;

// node_modules/@pixi/sprite-tiling/lib/sprite-tiling-fallback.vert.mjs
var gl1VertexSrc = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`;

// node_modules/@pixi/sprite-tiling/lib/sprite-tiling-simple.frag.mjs
var fragmentSimpleSrc = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;

// node_modules/@pixi/sprite-tiling/lib/TilingSpriteRenderer.mjs
var tempMat = new Matrix();
var TilingSpriteRenderer = class extends ObjectRenderer {
  /**
   * constructor for renderer
   * @param {PIXI.Renderer} renderer - The renderer this tiling awesomeness works for.
   */
  constructor(renderer) {
    super(renderer), renderer.runners.contextChange.add(this), this.quad = new QuadUv(), this.state = State.for2d();
  }
  /** Creates shaders when context is initialized. */
  contextChange() {
    const renderer = this.renderer, uniforms = { globals: renderer.globalUniforms };
    this.simpleShader = Shader.from(gl1VertexSrc, fragmentSimpleSrc, uniforms), this.shader = renderer.context.webGLVersion > 1 ? Shader.from(gl2VertexSrc, gl2FragmentSrc, uniforms) : Shader.from(gl1VertexSrc, gl1FragmentSrc, uniforms);
  }
  /**
   * @param {PIXI.TilingSprite} ts - tilingSprite to be rendered
   */
  render(ts) {
    const renderer = this.renderer, quad = this.quad;
    let vertices = quad.vertices;
    vertices[0] = vertices[6] = ts._width * -ts.anchor.x, vertices[1] = vertices[3] = ts._height * -ts.anchor.y, vertices[2] = vertices[4] = ts._width * (1 - ts.anchor.x), vertices[5] = vertices[7] = ts._height * (1 - ts.anchor.y);
    const anchorX = ts.uvRespectAnchor ? ts.anchor.x : 0, anchorY = ts.uvRespectAnchor ? ts.anchor.y : 0;
    vertices = quad.uvs, vertices[0] = vertices[6] = -anchorX, vertices[1] = vertices[3] = -anchorY, vertices[2] = vertices[4] = 1 - anchorX, vertices[5] = vertices[7] = 1 - anchorY, quad.invalidate();
    const tex = ts._texture, baseTex = tex.baseTexture, premultiplied = baseTex.alphaMode > 0, lt = ts.tileTransform.localTransform, uv = ts.uvMatrix;
    let isSimple = baseTex.isPowerOfTwo && tex.frame.width === baseTex.width && tex.frame.height === baseTex.height;
    isSimple && (baseTex._glTextures[renderer.CONTEXT_UID] ? isSimple = baseTex.wrapMode !== WRAP_MODES.CLAMP : baseTex.wrapMode === WRAP_MODES.CLAMP && (baseTex.wrapMode = WRAP_MODES.REPEAT));
    const shader = isSimple ? this.simpleShader : this.shader, w = tex.width, h = tex.height, W = ts._width, H = ts._height;
    tempMat.set(
      lt.a * w / W,
      lt.b * w / H,
      lt.c * h / W,
      lt.d * h / H,
      lt.tx / W,
      lt.ty / H
    ), tempMat.invert(), isSimple ? tempMat.prepend(uv.mapCoord) : (shader.uniforms.uMapCoord = uv.mapCoord.toArray(true), shader.uniforms.uClampFrame = uv.uClampFrame, shader.uniforms.uClampOffset = uv.uClampOffset), shader.uniforms.uTransform = tempMat.toArray(true), shader.uniforms.uColor = Color.shared.setValue(ts.tint).premultiply(ts.worldAlpha, premultiplied).toArray(shader.uniforms.uColor), shader.uniforms.translationMatrix = ts.transform.worldTransform.toArray(true), shader.uniforms.uSampler = tex, renderer.shader.bind(shader), renderer.geometry.bind(quad), this.state.blendMode = lib_exports.correctBlendMode(ts.blendMode, premultiplied), renderer.state.set(this.state), renderer.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
};
TilingSpriteRenderer.extension = {
  name: "tilingSprite",
  type: ExtensionType.RendererPlugin
};
extensions.add(TilingSpriteRenderer);

// node_modules/@pixi/spritesheet/lib/Spritesheet.mjs
var _Spritesheet = class _Spritesheet2 {
  /** @ignore */
  constructor(optionsOrTexture, arg1, arg2) {
    this.linkedSheets = [], (optionsOrTexture instanceof BaseTexture || optionsOrTexture instanceof Texture) && (optionsOrTexture = { texture: optionsOrTexture, data: arg1, resolutionFilename: arg2 });
    const { texture, data, resolutionFilename = null, cachePrefix = "" } = optionsOrTexture;
    this.cachePrefix = cachePrefix, this._texture = texture instanceof Texture ? texture : null, this.baseTexture = texture instanceof BaseTexture ? texture : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = data;
    const resource = this.baseTexture.resource;
    this.resolution = this._updateResolution(resolutionFilename || (resource ? resource.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  /**
   * Generate the resolution from the filename or fallback
   * to the meta.scale field of the JSON data.
   * @param resolutionFilename - The filename to use for resolving
   *        the default resolution.
   * @returns Resolution to use for spritesheet.
   */
  _updateResolution(resolutionFilename = null) {
    const { scale } = this.data.meta;
    let resolution = lib_exports.getResolutionOfUrl(resolutionFilename, null);
    return resolution === null && (resolution = typeof scale == "number" ? scale : parseFloat(scale ?? "1")), resolution !== 1 && this.baseTexture.setResolution(resolution), resolution;
  }
  /**
   * Parser spritesheet from loaded data. This is done asynchronously
   * to prevent creating too many Texture within a single process.
   * @method PIXI.Spritesheet#parse
   */
  parse() {
    return new Promise((resolve) => {
      this._callback = resolve, this._batchIndex = 0, this._frameKeys.length <= _Spritesheet2.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  /**
   * Process a batch of frames
   * @param initialFrameIndex - The index of frame to start.
   */
  _processFrames(initialFrameIndex) {
    let frameIndex = initialFrameIndex;
    const maxFrames = _Spritesheet2.BATCH_SIZE;
    for (; frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length; ) {
      const i = this._frameKeys[frameIndex], data = this._frames[i], rect = data.frame;
      if (rect) {
        let frame = null, trim = null;
        const sourceSize = data.trimmed !== false && data.sourceSize ? data.sourceSize : data.frame, orig = new Rectangle(
          0,
          0,
          Math.floor(sourceSize.w) / this.resolution,
          Math.floor(sourceSize.h) / this.resolution
        );
        data.rotated ? frame = new Rectangle(
          Math.floor(rect.x) / this.resolution,
          Math.floor(rect.y) / this.resolution,
          Math.floor(rect.h) / this.resolution,
          Math.floor(rect.w) / this.resolution
        ) : frame = new Rectangle(
          Math.floor(rect.x) / this.resolution,
          Math.floor(rect.y) / this.resolution,
          Math.floor(rect.w) / this.resolution,
          Math.floor(rect.h) / this.resolution
        ), data.trimmed !== false && data.spriteSourceSize && (trim = new Rectangle(
          Math.floor(data.spriteSourceSize.x) / this.resolution,
          Math.floor(data.spriteSourceSize.y) / this.resolution,
          Math.floor(rect.w) / this.resolution,
          Math.floor(rect.h) / this.resolution
        )), this.textures[i] = new Texture(
          this.baseTexture,
          frame,
          orig,
          trim,
          data.rotated ? 2 : 0,
          data.anchor,
          data.borders
        ), Texture.addToCache(this.textures[i], this.cachePrefix + i.toString());
      }
      frameIndex++;
    }
  }
  /** Parse animations config. */
  _processAnimations() {
    const animations = this.data.animations || {};
    for (const animName in animations) {
      this.animations[animName] = [];
      for (let i = 0; i < animations[animName].length; i++) {
        const frameName = animations[animName][i];
        this.animations[animName].push(this.textures[frameName]);
      }
    }
  }
  /** The parse has completed. */
  _parseComplete() {
    const callback = this._callback;
    this._callback = null, this._batchIndex = 0, callback.call(this, this.textures);
  }
  /** Begin the next batch of textures. */
  _nextBatch() {
    this._processFrames(this._batchIndex * _Spritesheet2.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * _Spritesheet2.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
    }, 0);
  }
  /**
   * Destroy Spritesheet and don't use after this.
   * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
   */
  destroy(destroyBase = false) {
    var _a;
    for (const i in this.textures)
      this.textures[i].destroy();
    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, destroyBase && ((_a = this._texture) == null ? void 0 : _a.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = [];
  }
};
_Spritesheet.BATCH_SIZE = 1e3;
var Spritesheet = _Spritesheet;

// node_modules/@pixi/spritesheet/lib/spritesheetAsset.mjs
var validImages = ["jpg", "png", "jpeg", "avif", "webp"];
function getCacheableAssets(keys, asset, ignoreMultiPack) {
  const out = {};
  if (keys.forEach((key) => {
    out[key] = asset;
  }), Object.keys(asset.textures).forEach((key) => {
    out[`${asset.cachePrefix}${key}`] = asset.textures[key];
  }), !ignoreMultiPack) {
    const basePath = lib_exports.path.dirname(keys[0]);
    asset.linkedSheets.forEach((item, i) => {
      Object.assign(out, getCacheableAssets(
        [`${basePath}/${asset.data.meta.related_multi_packs[i]}`],
        item,
        true
      ));
    });
  }
  return out;
}
var spritesheetAsset = {
  extension: ExtensionType.Asset,
  /** Handle the caching of the related Spritesheet Textures */
  cache: {
    test: (asset) => asset instanceof Spritesheet,
    getCacheableAssets: (keys, asset) => getCacheableAssets(keys, asset, false)
  },
  /** Resolve the the resolution of the asset. */
  resolver: {
    test: (value) => {
      const split = value.split("?")[0].split("."), extension = split.pop(), format = split.pop();
      return extension === "json" && validImages.includes(format);
    },
    parse: (value) => {
      var _a;
      const split = value.split(".");
      return {
        resolution: parseFloat(((_a = settings.RETINA_PREFIX.exec(value)) == null ? void 0 : _a[1]) ?? "1"),
        format: split[split.length - 2],
        src: value
      };
    }
  },
  /**
   * Loader plugin that parses sprite sheets!
   * once the JSON has been loaded this checks to see if the JSON is spritesheet data.
   * If it is, we load the spritesheets image and parse the data into PIXI.Spritesheet
   * All textures in the sprite sheet are then added to the cache
   * @ignore
   */
  loader: {
    name: "spritesheetLoader",
    extension: {
      type: ExtensionType.LoadParser,
      priority: LoaderParserPriority.Normal
    },
    async testParse(asset, options) {
      return lib_exports.path.extname(options.src).toLowerCase() === ".json" && !!asset.frames;
    },
    async parse(asset, options, loader) {
      var _a, _b;
      const {
        texture: imageTexture,
        // if user need to use preloaded texture
        imageFilename,
        // if user need to use custom filename (not from jsonFile.meta.image)
        cachePrefix
        // if user need to use custom cache prefix
      } = (options == null ? void 0 : options.data) ?? {};
      let basePath = lib_exports.path.dirname(options.src);
      basePath && basePath.lastIndexOf("/") !== basePath.length - 1 && (basePath += "/");
      let texture;
      if (imageTexture && imageTexture.baseTexture)
        texture = imageTexture;
      else {
        const imagePath = copySearchParams(basePath + (imageFilename ?? asset.meta.image), options.src);
        texture = (await loader.load([imagePath]))[imagePath];
      }
      const spritesheet = new Spritesheet({
        texture: texture.baseTexture,
        data: asset,
        resolutionFilename: options.src,
        cachePrefix
      });
      await spritesheet.parse();
      const multiPacks = (_a = asset == null ? void 0 : asset.meta) == null ? void 0 : _a.related_multi_packs;
      if (Array.isArray(multiPacks)) {
        const promises = [];
        for (const item of multiPacks) {
          if (typeof item != "string")
            continue;
          let itemUrl = basePath + item;
          ((_b = options.data) == null ? void 0 : _b.ignoreMultiPack) || (itemUrl = copySearchParams(itemUrl, options.src), promises.push(loader.load({
            src: itemUrl,
            data: {
              ignoreMultiPack: true
            }
          })));
        }
        const res = await Promise.all(promises);
        spritesheet.linkedSheets = res, res.forEach((item) => {
          item.linkedSheets = [spritesheet].concat(spritesheet.linkedSheets.filter((sp) => sp !== item));
        });
      }
      return spritesheet;
    },
    unload(spritesheet) {
      spritesheet.destroy(true);
    }
  }
};
extensions.add(spritesheetAsset);

// node_modules/@pixi/text-bitmap/lib/BitmapFontData.mjs
var BitmapFontData = class {
  constructor() {
    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
  }
};

// node_modules/@pixi/text-bitmap/lib/formats/TextFormat.mjs
var TextFormat = class {
  /**
   * Check if resource refers to txt font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */
  static test(data) {
    return typeof data == "string" && data.startsWith("info face=");
  }
  /**
   * Convert text font data to a javascript object.
   * @param txt - Raw string data to be converted
   * @returns - Parsed font data
   */
  static parse(txt) {
    const items = txt.match(/^[a-z]+\s+.+$/gm), rawData = {
      info: [],
      common: [],
      page: [],
      char: [],
      chars: [],
      kerning: [],
      kernings: [],
      distanceField: []
    };
    for (const i in items) {
      const name = items[i].match(/^[a-z]+/gm)[0], attributeList = items[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), itemData = {};
      for (const i2 in attributeList) {
        const split = attributeList[i2].split("="), key = split[0], strValue = split[1].replace(/"/gm, ""), floatValue = parseFloat(strValue), value = isNaN(floatValue) ? strValue : floatValue;
        itemData[key] = value;
      }
      rawData[name].push(itemData);
    }
    const font = new BitmapFontData();
    return rawData.info.forEach((info) => font.info.push({
      face: info.face,
      size: parseInt(info.size, 10)
    })), rawData.common.forEach((common) => font.common.push({
      lineHeight: parseInt(common.lineHeight, 10)
    })), rawData.page.forEach((page) => font.page.push({
      id: parseInt(page.id, 10),
      file: page.file
    })), rawData.char.forEach((char) => font.char.push({
      id: parseInt(char.id, 10),
      page: parseInt(char.page, 10),
      x: parseInt(char.x, 10),
      y: parseInt(char.y, 10),
      width: parseInt(char.width, 10),
      height: parseInt(char.height, 10),
      xoffset: parseInt(char.xoffset, 10),
      yoffset: parseInt(char.yoffset, 10),
      xadvance: parseInt(char.xadvance, 10)
    })), rawData.kerning.forEach((kerning) => font.kerning.push({
      first: parseInt(kerning.first, 10),
      second: parseInt(kerning.second, 10),
      amount: parseInt(kerning.amount, 10)
    })), rawData.distanceField.forEach((df) => font.distanceField.push({
      distanceRange: parseInt(df.distanceRange, 10),
      fieldType: df.fieldType
    })), font;
  }
};

// node_modules/@pixi/text-bitmap/lib/formats/XMLFormat.mjs
var XMLFormat = class {
  /**
   * Check if resource refers to xml font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */
  static test(data) {
    const xml = data;
    return typeof data != "string" && "getElementsByTagName" in data && xml.getElementsByTagName("page").length && xml.getElementsByTagName("info")[0].getAttribute("face") !== null;
  }
  /**
   * Convert the XML into BitmapFontData that we can use.
   * @param xml
   * @returns - Data to use for BitmapFont
   */
  static parse(xml) {
    const data = new BitmapFontData(), info = xml.getElementsByTagName("info"), common = xml.getElementsByTagName("common"), page = xml.getElementsByTagName("page"), char = xml.getElementsByTagName("char"), kerning = xml.getElementsByTagName("kerning"), distanceField = xml.getElementsByTagName("distanceField");
    for (let i = 0; i < info.length; i++)
      data.info.push({
        face: info[i].getAttribute("face"),
        size: parseInt(info[i].getAttribute("size"), 10)
      });
    for (let i = 0; i < common.length; i++)
      data.common.push({
        lineHeight: parseInt(common[i].getAttribute("lineHeight"), 10)
      });
    for (let i = 0; i < page.length; i++)
      data.page.push({
        id: parseInt(page[i].getAttribute("id"), 10) || 0,
        file: page[i].getAttribute("file")
      });
    for (let i = 0; i < char.length; i++) {
      const letter = char[i];
      data.char.push({
        id: parseInt(letter.getAttribute("id"), 10),
        page: parseInt(letter.getAttribute("page"), 10) || 0,
        x: parseInt(letter.getAttribute("x"), 10),
        y: parseInt(letter.getAttribute("y"), 10),
        width: parseInt(letter.getAttribute("width"), 10),
        height: parseInt(letter.getAttribute("height"), 10),
        xoffset: parseInt(letter.getAttribute("xoffset"), 10),
        yoffset: parseInt(letter.getAttribute("yoffset"), 10),
        xadvance: parseInt(letter.getAttribute("xadvance"), 10)
      });
    }
    for (let i = 0; i < kerning.length; i++)
      data.kerning.push({
        first: parseInt(kerning[i].getAttribute("first"), 10),
        second: parseInt(kerning[i].getAttribute("second"), 10),
        amount: parseInt(kerning[i].getAttribute("amount"), 10)
      });
    for (let i = 0; i < distanceField.length; i++)
      data.distanceField.push({
        fieldType: distanceField[i].getAttribute("fieldType"),
        distanceRange: parseInt(distanceField[i].getAttribute("distanceRange"), 10)
      });
    return data;
  }
};

// node_modules/@pixi/text-bitmap/lib/formats/XMLStringFormat.mjs
var XMLStringFormat = class {
  /**
   * Check if resource refers to text xml font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */
  static test(data) {
    return typeof data == "string" && data.includes("<font>") ? XMLFormat.test(settings.ADAPTER.parseXML(data)) : false;
  }
  /**
   * Convert the text XML into BitmapFontData that we can use.
   * @param xmlTxt
   * @returns - Data to use for BitmapFont
   */
  static parse(xmlTxt) {
    return XMLFormat.parse(settings.ADAPTER.parseXML(xmlTxt));
  }
};

// node_modules/@pixi/text-bitmap/lib/formats/index.mjs
var formats = [
  TextFormat,
  XMLFormat,
  XMLStringFormat
];
function autoDetectFormat(data) {
  for (let i = 0; i < formats.length; i++)
    if (formats[i].test(data))
      return formats[i];
  return null;
}

// node_modules/@pixi/text-bitmap/lib/utils/generateFillStyle.mjs
function generateFillStyle(canvas, context, style, resolution, lines, metrics) {
  const fillStyle = style.fill;
  if (Array.isArray(fillStyle)) {
    if (fillStyle.length === 1)
      return fillStyle[0];
  } else
    return fillStyle;
  let gradient;
  const dropShadowCorrection = style.dropShadow ? style.dropShadowDistance : 0, padding = style.padding || 0, width = canvas.width / resolution - dropShadowCorrection - padding * 2, height = canvas.height / resolution - dropShadowCorrection - padding * 2, fill = fillStyle.slice(), fillGradientStops = style.fillGradientStops.slice();
  if (!fillGradientStops.length) {
    const lengthPlus1 = fill.length + 1;
    for (let i = 1; i < lengthPlus1; ++i)
      fillGradientStops.push(i / lengthPlus1);
  }
  if (fill.unshift(fillStyle[0]), fillGradientStops.unshift(0), fill.push(fillStyle[fillStyle.length - 1]), fillGradientStops.push(1), style.fillGradientType === TEXT_GRADIENT.LINEAR_VERTICAL) {
    gradient = context.createLinearGradient(width / 2, padding, width / 2, height + padding);
    let lastIterationStop = 0;
    const gradStopLineHeight = (metrics.fontProperties.fontSize + style.strokeThickness) / height;
    for (let i = 0; i < lines.length; i++) {
      const thisLineTop = metrics.lineHeight * i;
      for (let j = 0; j < fill.length; j++) {
        let lineStop = 0;
        typeof fillGradientStops[j] == "number" ? lineStop = fillGradientStops[j] : lineStop = j / fill.length;
        const globalStop = thisLineTop / height + lineStop * gradStopLineHeight;
        let clampedStop = Math.max(lastIterationStop, globalStop);
        clampedStop = Math.min(clampedStop, 1), gradient.addColorStop(clampedStop, fill[j]), lastIterationStop = clampedStop;
      }
    }
  } else {
    gradient = context.createLinearGradient(padding, height / 2, width + padding, height / 2);
    const totalIterations = fill.length + 1;
    let currentIteration = 1;
    for (let i = 0; i < fill.length; i++) {
      let stop;
      typeof fillGradientStops[i] == "number" ? stop = fillGradientStops[i] : stop = currentIteration / totalIterations, gradient.addColorStop(stop, fill[i]), currentIteration++;
    }
  }
  return gradient;
}

// node_modules/@pixi/text-bitmap/lib/utils/drawGlyph.mjs
function drawGlyph(canvas, context, metrics, x, y, resolution, style) {
  const char = metrics.text, fontProperties = metrics.fontProperties;
  context.translate(x, y), context.scale(resolution, resolution);
  const tx = style.strokeThickness / 2, ty = -(style.strokeThickness / 2);
  if (context.font = style.toFontString(), context.lineWidth = style.strokeThickness, context.textBaseline = style.textBaseline, context.lineJoin = style.lineJoin, context.miterLimit = style.miterLimit, context.fillStyle = generateFillStyle(canvas, context, style, resolution, [char], metrics), context.strokeStyle = style.stroke, style.dropShadow) {
    const dropShadowColor = style.dropShadowColor, dropShadowBlur = style.dropShadowBlur * resolution, dropShadowDistance = style.dropShadowDistance * resolution;
    context.shadowColor = Color.shared.setValue(dropShadowColor).setAlpha(style.dropShadowAlpha).toRgbaString(), context.shadowBlur = dropShadowBlur, context.shadowOffsetX = Math.cos(style.dropShadowAngle) * dropShadowDistance, context.shadowOffsetY = Math.sin(style.dropShadowAngle) * dropShadowDistance;
  } else
    context.shadowColor = "black", context.shadowBlur = 0, context.shadowOffsetX = 0, context.shadowOffsetY = 0;
  style.stroke && style.strokeThickness && context.strokeText(char, tx, ty + metrics.lineHeight - fontProperties.descent), style.fill && context.fillText(char, tx, ty + metrics.lineHeight - fontProperties.descent), context.setTransform(1, 0, 0, 1, 0, 0), context.fillStyle = "rgba(0, 0, 0, 0)";
}

// node_modules/@pixi/text-bitmap/lib/utils/extractCharCode.mjs
function extractCharCode(str) {
  return str.codePointAt ? str.codePointAt(0) : str.charCodeAt(0);
}

// node_modules/@pixi/text-bitmap/lib/utils/splitTextToCharacters.mjs
function splitTextToCharacters(text) {
  return Array.from ? Array.from(text) : text.split("");
}

// node_modules/@pixi/text-bitmap/lib/utils/resolveCharacters.mjs
function resolveCharacters(chars) {
  typeof chars == "string" && (chars = [chars]);
  const result = [];
  for (let i = 0, j = chars.length; i < j; i++) {
    const item = chars[i];
    if (Array.isArray(item)) {
      if (item.length !== 2)
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${item.length}.`);
      const startCode = item[0].charCodeAt(0), endCode = item[1].charCodeAt(0);
      if (endCode < startCode)
        throw new Error("[BitmapFont]: Invalid character range.");
      for (let i2 = startCode, j2 = endCode; i2 <= j2; i2++)
        result.push(String.fromCharCode(i2));
    } else
      result.push(...splitTextToCharacters(item));
  }
  if (result.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return result;
}

// node_modules/@pixi/text-bitmap/lib/BitmapFont.mjs
var _BitmapFont = class _BitmapFont2 {
  /**
   * @param data
   * @param textures
   * @param ownsTextures - Setting to `true` will destroy page textures
   *        when the font is uninstalled.
   */
  constructor(data, textures, ownsTextures) {
    var _a;
    const [info] = data.info, [common] = data.common, [page] = data.page, [distanceField] = data.distanceField, res = lib_exports.getResolutionOfUrl(page.file), pageTextures = {};
    this._ownsTextures = ownsTextures, this.font = info.face, this.size = info.size, this.lineHeight = common.lineHeight / res, this.chars = {}, this.pageTextures = pageTextures;
    for (let i = 0; i < data.page.length; i++) {
      const { id, file } = data.page[i];
      pageTextures[id] = textures instanceof Array ? textures[i] : textures[file], (distanceField == null ? void 0 : distanceField.fieldType) && distanceField.fieldType !== "none" && (pageTextures[id].baseTexture.alphaMode = ALPHA_MODES.NO_PREMULTIPLIED_ALPHA, pageTextures[id].baseTexture.mipmap = MIPMAP_MODES.OFF);
    }
    for (let i = 0; i < data.char.length; i++) {
      const { id, page: page2 } = data.char[i];
      let { x, y, width, height, xoffset, yoffset, xadvance } = data.char[i];
      x /= res, y /= res, width /= res, height /= res, xoffset /= res, yoffset /= res, xadvance /= res;
      const rect = new Rectangle(
        x + pageTextures[page2].frame.x / res,
        y + pageTextures[page2].frame.y / res,
        width,
        height
      );
      this.chars[id] = {
        xOffset: xoffset,
        yOffset: yoffset,
        xAdvance: xadvance,
        kerning: {},
        texture: new Texture(
          pageTextures[page2].baseTexture,
          rect
        ),
        page: page2
      };
    }
    for (let i = 0; i < data.kerning.length; i++) {
      let { first, second, amount } = data.kerning[i];
      first /= res, second /= res, amount /= res, this.chars[second] && (this.chars[second].kerning[first] = amount);
    }
    this.distanceFieldRange = distanceField == null ? void 0 : distanceField.distanceRange, this.distanceFieldType = ((_a = distanceField == null ? void 0 : distanceField.fieldType) == null ? void 0 : _a.toLowerCase()) ?? "none";
  }
  /** Remove references to created glyph textures. */
  destroy() {
    for (const id in this.chars)
      this.chars[id].texture.destroy(), this.chars[id].texture = null;
    for (const id in this.pageTextures)
      this._ownsTextures && this.pageTextures[id].destroy(true), this.pageTextures[id] = null;
    this.chars = null, this.pageTextures = null;
  }
  /**
   * Register a new bitmap font.
   * @param data - The
   *        characters map that could be provided as xml or raw string.
   * @param textures - List of textures for each page.
   * @param ownsTextures - Set to `true` to destroy page textures
   *        when the font is uninstalled. By default fonts created with
   *        `BitmapFont.from` or from the `BitmapFontLoader` are `true`.
   * @returns {PIXI.BitmapFont} Result font object with font, size, lineHeight
   *         and char fields.
   */
  static install(data, textures, ownsTextures) {
    let fontData;
    if (data instanceof BitmapFontData)
      fontData = data;
    else {
      const format = autoDetectFormat(data);
      if (!format)
        throw new Error("Unrecognized data format for font.");
      fontData = format.parse(data);
    }
    textures instanceof Texture && (textures = [textures]);
    const font = new _BitmapFont2(fontData, textures, ownsTextures);
    return _BitmapFont2.available[font.font] = font, font;
  }
  /**
   * Remove bitmap font by name.
   * @param name - Name of the font to uninstall.
   */
  static uninstall(name) {
    const font = _BitmapFont2.available[name];
    if (!font)
      throw new Error(`No font found named '${name}'`);
    font.destroy(), delete _BitmapFont2.available[name];
  }
  /**
   * Generates a bitmap-font for the given style and character set. This does not support
   * kernings yet. With `style` properties, only the following non-layout properties are used:
   *
   * - {@link PIXI.TextStyle#dropShadow|dropShadow}
   * - {@link PIXI.TextStyle#dropShadowDistance|dropShadowDistance}
   * - {@link PIXI.TextStyle#dropShadowColor|dropShadowColor}
   * - {@link PIXI.TextStyle#dropShadowBlur|dropShadowBlur}
   * - {@link PIXI.TextStyle#dropShadowAngle|dropShadowAngle}
   * - {@link PIXI.TextStyle#fill|fill}
   * - {@link PIXI.TextStyle#fillGradientStops|fillGradientStops}
   * - {@link PIXI.TextStyle#fillGradientType|fillGradientType}
   * - {@link PIXI.TextStyle#fontFamily|fontFamily}
   * - {@link PIXI.TextStyle#fontSize|fontSize}
   * - {@link PIXI.TextStyle#fontVariant|fontVariant}
   * - {@link PIXI.TextStyle#fontWeight|fontWeight}
   * - {@link PIXI.TextStyle#lineJoin|lineJoin}
   * - {@link PIXI.TextStyle#miterLimit|miterLimit}
   * - {@link PIXI.TextStyle#stroke|stroke}
   * - {@link PIXI.TextStyle#strokeThickness|strokeThickness}
   * - {@link PIXI.TextStyle#textBaseline|textBaseline}
   * @param name - The name of the custom font to use with BitmapText.
   * @param textStyle - Style options to render with BitmapFont.
   * @param options - Setup options for font or name of the font.
   * @returns Font generated by style options.
   * @example
   * import { BitmapFont, BitmapText } from 'pixi.js';
   *
   * BitmapFont.from('TitleFont', {
   *     fontFamily: 'Arial',
   *     fontSize: 12,
   *     strokeThickness: 2,
   *     fill: 'purple',
   * });
   *
   * const title = new BitmapText('This is the title', { fontName: 'TitleFont' });
   */
  static from(name, textStyle, options) {
    if (!name)
      throw new Error("[BitmapFont] Property `name` is required.");
    const {
      chars,
      padding,
      resolution,
      textureWidth,
      textureHeight,
      ...baseOptions
    } = Object.assign({}, _BitmapFont2.defaultOptions, options), charsList = resolveCharacters(chars), style = textStyle instanceof TextStyle ? textStyle : new TextStyle(textStyle), lineWidth = textureWidth, fontData = new BitmapFontData();
    fontData.info[0] = {
      face: style.fontFamily,
      size: style.fontSize
    }, fontData.common[0] = {
      lineHeight: style.fontSize
    };
    let positionX = 0, positionY = 0, canvas, context, baseTexture, maxCharHeight = 0;
    const baseTextures = [], textures = [];
    for (let i = 0; i < charsList.length; i++) {
      canvas || (canvas = settings.ADAPTER.createCanvas(), canvas.width = textureWidth, canvas.height = textureHeight, context = canvas.getContext("2d"), baseTexture = new BaseTexture(canvas, { resolution, ...baseOptions }), baseTextures.push(baseTexture), textures.push(new Texture(baseTexture)), fontData.page.push({
        id: textures.length - 1,
        file: ""
      }));
      const character = charsList[i], metrics = TextMetrics.measureText(character, style, false, canvas), width = metrics.width, height = Math.ceil(metrics.height), textureGlyphWidth = Math.ceil((style.fontStyle === "italic" ? 2 : 1) * width);
      if (positionY >= textureHeight - height * resolution) {
        if (positionY === 0)
          throw new Error(`[BitmapFont] textureHeight ${textureHeight}px is too small (fontFamily: '${style.fontFamily}', fontSize: ${style.fontSize}px, char: '${character}')`);
        --i, canvas = null, context = null, baseTexture = null, positionY = 0, positionX = 0, maxCharHeight = 0;
        continue;
      }
      if (maxCharHeight = Math.max(height + metrics.fontProperties.descent, maxCharHeight), textureGlyphWidth * resolution + positionX >= lineWidth) {
        if (positionX === 0)
          throw new Error(`[BitmapFont] textureWidth ${textureWidth}px is too small (fontFamily: '${style.fontFamily}', fontSize: ${style.fontSize}px, char: '${character}')`);
        --i, positionY += maxCharHeight * resolution, positionY = Math.ceil(positionY), positionX = 0, maxCharHeight = 0;
        continue;
      }
      drawGlyph(canvas, context, metrics, positionX, positionY, resolution, style);
      const id = extractCharCode(metrics.text);
      fontData.char.push({
        id,
        page: textures.length - 1,
        x: positionX / resolution,
        y: positionY / resolution,
        width: textureGlyphWidth,
        height,
        xoffset: 0,
        yoffset: 0,
        xadvance: width - (style.dropShadow ? style.dropShadowDistance : 0) - (style.stroke ? style.strokeThickness : 0)
      }), positionX += (textureGlyphWidth + 2 * padding) * resolution, positionX = Math.ceil(positionX);
    }
    if (!(options == null ? void 0 : options.skipKerning))
      for (let i = 0, len = charsList.length; i < len; i++) {
        const first = charsList[i];
        for (let j = 0; j < len; j++) {
          const second = charsList[j], c1 = context.measureText(first).width, c2 = context.measureText(second).width, amount = context.measureText(first + second).width - (c1 + c2);
          amount && fontData.kerning.push({
            first: extractCharCode(first),
            second: extractCharCode(second),
            amount
          });
        }
      }
    const font = new _BitmapFont2(fontData, textures, true);
    return _BitmapFont2.available[name] !== void 0 && _BitmapFont2.uninstall(name), _BitmapFont2.available[name] = font, font;
  }
};
_BitmapFont.ALPHA = [["a", "z"], ["A", "Z"], " "], /**
* This character set includes all decimal digits (from 0 to 9).
* @type {string[][]}
* @example
* BitmapFont.from('ExampleFont', style, { chars: BitmapFont.NUMERIC })
*/
_BitmapFont.NUMERIC = [["0", "9"]], /**
* This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.
* @type {string[][]}
*/
_BitmapFont.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], /**
* This character set consists of all the ASCII table.
* @member {string[][]}
* @see http://www.asciitable.com/
*/
_BitmapFont.ASCII = [[" ", "~"]], /**
* Collection of default options when using `BitmapFont.from`.
* @property {number} [resolution=1] -
* @property {number} [textureWidth=512] -
* @property {number} [textureHeight=512] -
* @property {number} [padding=4] -
* @property {string|string[]|string[][]} chars = PIXI.BitmapFont.ALPHANUMERIC
*/
_BitmapFont.defaultOptions = {
  resolution: 1,
  textureWidth: 512,
  textureHeight: 512,
  padding: 4,
  chars: _BitmapFont.ALPHANUMERIC
}, /** Collection of available/installed fonts. */
_BitmapFont.available = {};
var BitmapFont = _BitmapFont;

// node_modules/@pixi/text-bitmap/lib/shader/msdf.frag.mjs
var msdfFrag = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`;

// node_modules/@pixi/text-bitmap/lib/shader/msdf.vert.mjs
var msdfVert = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;

// node_modules/@pixi/text-bitmap/lib/BitmapText.mjs
var pageMeshDataDefaultPageMeshData = [];
var pageMeshDataMSDFPageMeshData = [];
var charRenderDataPool = [];
var _BitmapText = class _BitmapText2 extends Container {
  /**
   * @param text - A string that you would like the text to display.
   * @param style - The style parameters.
   * @param {string} style.fontName - The installed BitmapFont name.
   * @param {number} [style.fontSize] - The size of the font in pixels, e.g. 24. If undefined,
   *.     this will default to the BitmapFont size.
   * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center', 'right' or 'justify'),
   *      does not affect single line text.
   * @param {PIXI.ColorSource} [style.tint=0xFFFFFF] - The tint color.
   * @param {number} [style.letterSpacing=0] - The amount of spacing between letters.
   * @param {number} [style.maxWidth=0] - The max width of the text before line wrapping.
   */
  constructor(text, style = {}) {
    super();
    const { align, tint, maxWidth, letterSpacing, fontName, fontSize } = Object.assign(
      {},
      _BitmapText2.styleDefaults,
      style
    );
    if (!BitmapFont.available[fontName])
      throw new Error(`Missing BitmapFont "${fontName}"`);
    this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = align, this._tintColor = new Color(tint), this._font = void 0, this._fontName = fontName, this._fontSize = fontSize, this.text = text, this._maxWidth = maxWidth, this._maxLineHeight = 0, this._letterSpacing = letterSpacing, this._anchor = new ObservablePoint(() => {
      this.dirty = true;
    }, this, 0, 0), this._roundPixels = settings.ROUND_PIXELS, this.dirty = true, this._resolution = settings.RESOLUTION, this._autoResolution = true, this._textureCache = {};
  }
  /** Renders text and updates it when needed. This should only be called if the BitmapFont is regenerated. */
  updateText() {
    var _a;
    const data = BitmapFont.available[this._fontName], fontSize = this.fontSize, scale = fontSize / data.size, pos = new Point(), chars = [], lineWidths = [], lineSpaces = [], text = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ", charsInput = splitTextToCharacters(text), maxWidth = this._maxWidth * data.size / fontSize, pageMeshDataPool = data.distanceFieldType === "none" ? pageMeshDataDefaultPageMeshData : pageMeshDataMSDFPageMeshData;
    let prevCharCode = null, lastLineWidth = 0, maxLineWidth = 0, line = 0, lastBreakPos = -1, lastBreakWidth = 0, spacesRemoved = 0, maxLineHeight = 0, spaceCount = 0;
    for (let i = 0; i < charsInput.length; i++) {
      const char = charsInput[i], charCode = extractCharCode(char);
      if (/(?:\s)/.test(char) && (lastBreakPos = i, lastBreakWidth = lastLineWidth, spaceCount++), char === "\r" || char === `
`) {
        lineWidths.push(lastLineWidth), lineSpaces.push(-1), maxLineWidth = Math.max(maxLineWidth, lastLineWidth), ++line, ++spacesRemoved, pos.x = 0, pos.y += data.lineHeight, prevCharCode = null, spaceCount = 0;
        continue;
      }
      const charData = data.chars[charCode];
      if (!charData)
        continue;
      prevCharCode && charData.kerning[prevCharCode] && (pos.x += charData.kerning[prevCharCode]);
      const charRenderData = charRenderDataPool.pop() || {
        texture: Texture.EMPTY,
        line: 0,
        charCode: 0,
        prevSpaces: 0,
        position: new Point()
      };
      charRenderData.texture = charData.texture, charRenderData.line = line, charRenderData.charCode = charCode, charRenderData.position.x = Math.round(pos.x + charData.xOffset + this._letterSpacing / 2), charRenderData.position.y = Math.round(pos.y + charData.yOffset), charRenderData.prevSpaces = spaceCount, chars.push(charRenderData), lastLineWidth = charRenderData.position.x + Math.max(charData.xAdvance - charData.xOffset, charData.texture.orig.width), pos.x += charData.xAdvance + this._letterSpacing, maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height), prevCharCode = charCode, lastBreakPos !== -1 && maxWidth > 0 && pos.x > maxWidth && (++spacesRemoved, lib_exports.removeItems(chars, 1 + lastBreakPos - spacesRemoved, 1 + i - lastBreakPos), i = lastBreakPos, lastBreakPos = -1, lineWidths.push(lastBreakWidth), lineSpaces.push(chars.length > 0 ? chars[chars.length - 1].prevSpaces : 0), maxLineWidth = Math.max(maxLineWidth, lastBreakWidth), line++, pos.x = 0, pos.y += data.lineHeight, prevCharCode = null, spaceCount = 0);
    }
    const lastChar = charsInput[charsInput.length - 1];
    lastChar !== "\r" && lastChar !== `
` && (/(?:\s)/.test(lastChar) && (lastLineWidth = lastBreakWidth), lineWidths.push(lastLineWidth), maxLineWidth = Math.max(maxLineWidth, lastLineWidth), lineSpaces.push(-1));
    const lineAlignOffsets = [];
    for (let i = 0; i <= line; i++) {
      let alignOffset = 0;
      this._align === "right" ? alignOffset = maxLineWidth - lineWidths[i] : this._align === "center" ? alignOffset = (maxLineWidth - lineWidths[i]) / 2 : this._align === "justify" && (alignOffset = lineSpaces[i] < 0 ? 0 : (maxLineWidth - lineWidths[i]) / lineSpaces[i]), lineAlignOffsets.push(alignOffset);
    }
    const lenChars = chars.length, pagesMeshData = {}, newPagesMeshData = [], activePagesMeshData = this._activePagesMeshData;
    pageMeshDataPool.push(...activePagesMeshData);
    for (let i = 0; i < lenChars; i++) {
      const texture = chars[i].texture, baseTextureUid = texture.baseTexture.uid;
      if (!pagesMeshData[baseTextureUid]) {
        let pageMeshData = pageMeshDataPool.pop();
        if (!pageMeshData) {
          const geometry = new MeshGeometry();
          let material, meshBlendMode;
          data.distanceFieldType === "none" ? (material = new MeshMaterial(Texture.EMPTY), meshBlendMode = BLEND_MODES.NORMAL) : (material = new MeshMaterial(
            Texture.EMPTY,
            { program: Program.from(msdfVert, msdfFrag), uniforms: { uFWidth: 0 } }
          ), meshBlendMode = BLEND_MODES.NORMAL_NPM);
          const mesh = new Mesh(geometry, material);
          mesh.blendMode = meshBlendMode, pageMeshData = {
            index: 0,
            indexCount: 0,
            vertexCount: 0,
            uvsCount: 0,
            total: 0,
            mesh,
            vertices: null,
            uvs: null,
            indices: null
          };
        }
        pageMeshData.index = 0, pageMeshData.indexCount = 0, pageMeshData.vertexCount = 0, pageMeshData.uvsCount = 0, pageMeshData.total = 0;
        const { _textureCache } = this;
        _textureCache[baseTextureUid] = _textureCache[baseTextureUid] || new Texture(texture.baseTexture), pageMeshData.mesh.texture = _textureCache[baseTextureUid], pageMeshData.mesh.tint = this._tintColor.value, newPagesMeshData.push(pageMeshData), pagesMeshData[baseTextureUid] = pageMeshData;
      }
      pagesMeshData[baseTextureUid].total++;
    }
    for (let i = 0; i < activePagesMeshData.length; i++)
      newPagesMeshData.includes(activePagesMeshData[i]) || this.removeChild(activePagesMeshData[i].mesh);
    for (let i = 0; i < newPagesMeshData.length; i++)
      newPagesMeshData[i].mesh.parent !== this && this.addChild(newPagesMeshData[i].mesh);
    this._activePagesMeshData = newPagesMeshData;
    for (const i in pagesMeshData) {
      const pageMeshData = pagesMeshData[i], total = pageMeshData.total;
      if (!(((_a = pageMeshData.indices) == null ? void 0 : _a.length) > 6 * total) || pageMeshData.vertices.length < Mesh.BATCHABLE_SIZE * 2)
        pageMeshData.vertices = new Float32Array(4 * 2 * total), pageMeshData.uvs = new Float32Array(4 * 2 * total), pageMeshData.indices = new Uint16Array(6 * total);
      else {
        const total2 = pageMeshData.total, vertices = pageMeshData.vertices;
        for (let i2 = total2 * 4 * 2; i2 < vertices.length; i2++)
          vertices[i2] = 0;
      }
      pageMeshData.mesh.size = 6 * total;
    }
    for (let i = 0; i < lenChars; i++) {
      const char = chars[i];
      let offset = char.position.x + lineAlignOffsets[char.line] * (this._align === "justify" ? char.prevSpaces : 1);
      this._roundPixels && (offset = Math.round(offset));
      const xPos = offset * scale, yPos = char.position.y * scale, texture = char.texture, pageMesh = pagesMeshData[texture.baseTexture.uid], textureFrame = texture.frame, textureUvs = texture._uvs, index = pageMesh.index++;
      pageMesh.indices[index * 6 + 0] = 0 + index * 4, pageMesh.indices[index * 6 + 1] = 1 + index * 4, pageMesh.indices[index * 6 + 2] = 2 + index * 4, pageMesh.indices[index * 6 + 3] = 0 + index * 4, pageMesh.indices[index * 6 + 4] = 2 + index * 4, pageMesh.indices[index * 6 + 5] = 3 + index * 4, pageMesh.vertices[index * 8 + 0] = xPos, pageMesh.vertices[index * 8 + 1] = yPos, pageMesh.vertices[index * 8 + 2] = xPos + textureFrame.width * scale, pageMesh.vertices[index * 8 + 3] = yPos, pageMesh.vertices[index * 8 + 4] = xPos + textureFrame.width * scale, pageMesh.vertices[index * 8 + 5] = yPos + textureFrame.height * scale, pageMesh.vertices[index * 8 + 6] = xPos, pageMesh.vertices[index * 8 + 7] = yPos + textureFrame.height * scale, pageMesh.uvs[index * 8 + 0] = textureUvs.x0, pageMesh.uvs[index * 8 + 1] = textureUvs.y0, pageMesh.uvs[index * 8 + 2] = textureUvs.x1, pageMesh.uvs[index * 8 + 3] = textureUvs.y1, pageMesh.uvs[index * 8 + 4] = textureUvs.x2, pageMesh.uvs[index * 8 + 5] = textureUvs.y2, pageMesh.uvs[index * 8 + 6] = textureUvs.x3, pageMesh.uvs[index * 8 + 7] = textureUvs.y3;
    }
    this._textWidth = maxLineWidth * scale, this._textHeight = (pos.y + data.lineHeight) * scale;
    for (const i in pagesMeshData) {
      const pageMeshData = pagesMeshData[i];
      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
        let vertexCount = 0;
        const anchorOffsetX = this._textWidth * this.anchor.x, anchorOffsetY = this._textHeight * this.anchor.y;
        for (let i2 = 0; i2 < pageMeshData.total; i2++)
          pageMeshData.vertices[vertexCount++] -= anchorOffsetX, pageMeshData.vertices[vertexCount++] -= anchorOffsetY, pageMeshData.vertices[vertexCount++] -= anchorOffsetX, pageMeshData.vertices[vertexCount++] -= anchorOffsetY, pageMeshData.vertices[vertexCount++] -= anchorOffsetX, pageMeshData.vertices[vertexCount++] -= anchorOffsetY, pageMeshData.vertices[vertexCount++] -= anchorOffsetX, pageMeshData.vertices[vertexCount++] -= anchorOffsetY;
      }
      this._maxLineHeight = maxLineHeight * scale;
      const vertexBuffer = pageMeshData.mesh.geometry.getBuffer("aVertexPosition"), textureBuffer = pageMeshData.mesh.geometry.getBuffer("aTextureCoord"), indexBuffer = pageMeshData.mesh.geometry.getIndex();
      vertexBuffer.data = pageMeshData.vertices, textureBuffer.data = pageMeshData.uvs, indexBuffer.data = pageMeshData.indices, vertexBuffer.update(), textureBuffer.update(), indexBuffer.update();
    }
    for (let i = 0; i < chars.length; i++)
      charRenderDataPool.push(chars[i]);
    this._font = data, this.dirty = false;
  }
  updateTransform() {
    this.validate(), this.containerUpdateTransform();
  }
  _render(renderer) {
    this._autoResolution && this._resolution !== renderer.resolution && (this._resolution = renderer.resolution, this.dirty = true);
    const { distanceFieldRange, distanceFieldType, size } = BitmapFont.available[this._fontName];
    if (distanceFieldType !== "none") {
      const { a, b, c, d } = this.worldTransform, dx = Math.sqrt(a * a + b * b), dy = Math.sqrt(c * c + d * d), worldScale = (Math.abs(dx) + Math.abs(dy)) / 2, fontScale = this.fontSize / size, resolution = renderer._view.resolution;
      for (const mesh of this._activePagesMeshData)
        mesh.mesh.shader.uniforms.uFWidth = worldScale * distanceFieldRange * fontScale * resolution;
    }
    super._render(renderer);
  }
  /**
   * Validates text before calling parent's getLocalBounds
   * @returns - The rectangular bounding area
   */
  getLocalBounds() {
    return this.validate(), super.getLocalBounds();
  }
  /**
   * Updates text when needed
   * @private
   */
  validate() {
    const font = BitmapFont.available[this._fontName];
    if (!font)
      throw new Error(`Missing BitmapFont "${this._fontName}"`);
    this._font !== font && (this.dirty = true), this.dirty && this.updateText();
  }
  /**
   * The tint of the BitmapText object.
   * @default 0xffffff
   */
  get tint() {
    return this._tintColor.value;
  }
  set tint(value) {
    if (this.tint !== value) {
      this._tintColor.setValue(value);
      for (let i = 0; i < this._activePagesMeshData.length; i++)
        this._activePagesMeshData[i].mesh.tint = value;
    }
  }
  /**
   * The alignment of the BitmapText object.
   * @member {string}
   * @default 'left'
   */
  get align() {
    return this._align;
  }
  set align(value) {
    this._align !== value && (this._align = value, this.dirty = true);
  }
  /** The name of the BitmapFont. */
  get fontName() {
    return this._fontName;
  }
  set fontName(value) {
    if (!BitmapFont.available[value])
      throw new Error(`Missing BitmapFont "${value}"`);
    this._fontName !== value && (this._fontName = value, this.dirty = true);
  }
  /** The size of the font to display. */
  get fontSize() {
    return this._fontSize ?? BitmapFont.available[this._fontName].size;
  }
  set fontSize(value) {
    this._fontSize !== value && (this._fontSize = value, this.dirty = true);
  }
  /**
   * The anchor sets the origin point of the text.
   *
   * The default is `(0,0)`, this means the text's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
   */
  get anchor() {
    return this._anchor;
  }
  set anchor(value) {
    typeof value == "number" ? this._anchor.set(value) : this._anchor.copyFrom(value);
  }
  /** The text of the BitmapText object. */
  get text() {
    return this._text;
  }
  set text(text) {
    text = String(text ?? ""), this._text !== text && (this._text = text, this.dirty = true);
  }
  /**
   * The max width of this bitmap text in pixels. If the text provided is longer than the
   * value provided, line breaks will be automatically inserted in the last whitespace.
   * Disable by setting the value to 0.
   */
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(value) {
    this._maxWidth !== value && (this._maxWidth = value, this.dirty = true);
  }
  /**
   * The max line height. This is useful when trying to use the total height of the Text,
   * i.e. when trying to vertically align.
   * @readonly
   */
  get maxLineHeight() {
    return this.validate(), this._maxLineHeight;
  }
  /**
   * The width of the overall text, different from fontSize,
   * which is defined in the style object.
   * @readonly
   */
  get textWidth() {
    return this.validate(), this._textWidth;
  }
  /** Additional space between characters. */
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(value) {
    this._letterSpacing !== value && (this._letterSpacing = value, this.dirty = true);
  }
  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
   * @default PIXI.settings.ROUND_PIXELS
   */
  get roundPixels() {
    return this._roundPixels;
  }
  set roundPixels(value) {
    value !== this._roundPixels && (this._roundPixels = value, this.dirty = true);
  }
  /**
   * The height of the overall text, different from fontSize,
   * which is defined in the style object.
   * @readonly
   */
  get textHeight() {
    return this.validate(), this._textHeight;
  }
  /**
   * The resolution / device pixel ratio of the canvas.
   *
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @default 1
   */
  get resolution() {
    return this._resolution;
  }
  set resolution(value) {
    this._autoResolution = false, this._resolution !== value && (this._resolution = value, this.dirty = true);
  }
  destroy(options) {
    const { _textureCache } = this, pageMeshDataPool = BitmapFont.available[this._fontName].distanceFieldType === "none" ? pageMeshDataDefaultPageMeshData : pageMeshDataMSDFPageMeshData;
    pageMeshDataPool.push(...this._activePagesMeshData);
    for (const pageMeshData of this._activePagesMeshData)
      this.removeChild(pageMeshData.mesh);
    this._activePagesMeshData = [], pageMeshDataPool.filter((page) => _textureCache[page.mesh.texture.baseTexture.uid]).forEach((page) => {
      page.mesh.texture = Texture.EMPTY;
    });
    for (const id in _textureCache)
      _textureCache[id].destroy(), delete _textureCache[id];
    this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(options);
  }
};
_BitmapText.styleDefaults = {
  align: "left",
  tint: 16777215,
  maxWidth: 0,
  letterSpacing: 0
};
var BitmapText = _BitmapText;

// node_modules/@pixi/text-bitmap/lib/loadBitmapFont.mjs
var validExtensions = [".xml", ".fnt"];
var loadBitmapFont = {
  extension: {
    type: ExtensionType.LoadParser,
    priority: LoaderParserPriority.Normal
  },
  name: "loadBitmapFont",
  test(url) {
    return validExtensions.includes(lib_exports.path.extname(url).toLowerCase());
  },
  async testParse(data) {
    return TextFormat.test(data) || XMLStringFormat.test(data);
  },
  async parse(asset, data, loader) {
    const fontData = TextFormat.test(asset) ? TextFormat.parse(asset) : XMLStringFormat.parse(asset), { src } = data, { page: pages } = fontData, textureUrls = [];
    for (let i = 0; i < pages.length; ++i) {
      const pageFile = pages[i].file;
      let imagePath = lib_exports.path.join(lib_exports.path.dirname(src), pageFile);
      imagePath = copySearchParams(imagePath, src), textureUrls.push(imagePath);
    }
    const loadedTextures = await loader.load(textureUrls), textures = textureUrls.map((url) => loadedTextures[url]);
    return BitmapFont.install(fontData, textures, true);
  },
  async load(url, _options) {
    return (await settings.ADAPTER.fetch(url)).text();
  },
  unload(bitmapFont) {
    bitmapFont.destroy();
  }
};
extensions.add(loadBitmapFont);

// node_modules/@pixi/text-html/lib/HTMLTextStyle.mjs
var _HTMLTextStyle = class _HTMLTextStyle2 extends TextStyle {
  constructor() {
    super(...arguments), this._fonts = [], this._overrides = [], this._stylesheet = "", this.fontsDirty = false;
  }
  /**
   * Convert a TextStyle to HTMLTextStyle
   * @param originalStyle
   * @example
   * import {TextStyle } from 'pixi.js';
   * import {HTMLTextStyle} from '@pixi/text-html';
   * const style = new TextStyle();
   * const htmlStyle = HTMLTextStyle.from(style);
   */
  static from(originalStyle) {
    return new _HTMLTextStyle2(
      Object.keys(_HTMLTextStyle2.defaultOptions).reduce((obj, prop) => ({ ...obj, [prop]: originalStyle[prop] }), {})
    );
  }
  /** Clear the current font */
  cleanFonts() {
    this._fonts.length > 0 && (this._fonts.forEach((font) => {
      URL.revokeObjectURL(font.src), font.refs--, font.refs === 0 && (font.fontFace && document.fonts.delete(font.fontFace), delete _HTMLTextStyle2.availableFonts[font.originalUrl]);
    }), this.fontFamily = "Arial", this._fonts.length = 0, this.styleID++, this.fontsDirty = true);
  }
  /**
   * Because of how HTMLText renders, fonts need to be imported
   * @param url
   * @param options
   */
  loadFont(url, options = {}) {
    const { availableFonts } = _HTMLTextStyle2;
    if (availableFonts[url]) {
      const font = availableFonts[url];
      return this._fonts.push(font), font.refs++, this.styleID++, this.fontsDirty = true, Promise.resolve();
    }
    return settings.ADAPTER.fetch(url).then((response) => response.blob()).then(async (blob) => new Promise((resolve, reject) => {
      const src = URL.createObjectURL(blob), reader = new FileReader();
      reader.onload = () => resolve([src, reader.result]), reader.onerror = reject, reader.readAsDataURL(blob);
    })).then(async ([src, dataSrc]) => {
      const font = Object.assign({
        family: lib_exports.path.basename(url, lib_exports.path.extname(url)),
        weight: "normal",
        style: "normal",
        display: "auto",
        src,
        dataSrc,
        refs: 1,
        originalUrl: url,
        fontFace: null
      }, options);
      availableFonts[url] = font, this._fonts.push(font), this.styleID++;
      const fontFace = new FontFace(font.family, `url(${font.src})`, {
        weight: font.weight,
        style: font.style,
        display: font.display
      });
      font.fontFace = fontFace, await fontFace.load(), document.fonts.add(fontFace), await document.fonts.ready, this.styleID++, this.fontsDirty = true;
    });
  }
  /**
   * Add a style override, this can be any CSS property
   * it will override any built-in style. This is the
   * property and the value as a string (e.g., `color: red`).
   * This will override any other internal style.
   * @param {string} value - CSS style(s) to add.
   * @example
   * style.addOverride('background-color: red');
   */
  addOverride(...value) {
    const toAdd = value.filter((v) => !this._overrides.includes(v));
    toAdd.length > 0 && (this._overrides.push(...toAdd), this.styleID++);
  }
  /**
   * Remove any overrides that match the value.
   * @param {string} value - CSS style to remove.
   * @example
   * style.removeOverride('background-color: red');
   */
  removeOverride(...value) {
    const toRemove = value.filter((v) => this._overrides.includes(v));
    toRemove.length > 0 && (this._overrides = this._overrides.filter((v) => !toRemove.includes(v)), this.styleID++);
  }
  /**
   * Internally converts all of the style properties into CSS equivalents.
   * @param scale
   * @returns The CSS style string, for setting `style` property of root HTMLElement.
   */
  toCSS(scale) {
    return [
      `transform: scale(${scale})`,
      "transform-origin: top left",
      "display: inline-block",
      `color: ${this.normalizeColor(this.fill)}`,
      `font-size: ${this.fontSize}px`,
      `font-family: ${this.fontFamily}`,
      `font-weight: ${this.fontWeight}`,
      `font-style: ${this.fontStyle}`,
      `font-variant: ${this.fontVariant}`,
      `letter-spacing: ${this.letterSpacing}px`,
      `text-align: ${this.align}`,
      `padding: ${this.padding}px`,
      `white-space: ${this.whiteSpace}`,
      ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [],
      ...this.wordWrap ? [
        `word-wrap: ${this.breakWords ? "break-all" : "break-word"}`,
        `max-width: ${this.wordWrapWidth}px`
      ] : [],
      ...this.strokeThickness ? [
        `-webkit-text-stroke-width: ${this.strokeThickness}px`,
        `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,
        `text-stroke-width: ${this.strokeThickness}px`,
        `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
        "paint-order: stroke"
      ] : [],
      ...this.dropShadow ? [this.dropShadowToCSS()] : [],
      ...this._overrides
    ].join(";");
  }
  /** Get the font CSS styles from the loaded font, If available. */
  toGlobalCSS() {
    return this._fonts.reduce((result, font) => `${result}
            @font-face {
                font-family: "${font.family}";
                src: url('${font.dataSrc}');
                font-weight: ${font.weight};
                font-style: ${font.style};
                font-display: ${font.display};
            }`, this._stylesheet);
  }
  /** Internal stylesheet contents, useful for creating rules for rendering */
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(value) {
    this._stylesheet !== value && (this._stylesheet = value, this.styleID++);
  }
  /**
   * Convert numerical colors into hex-strings
   * @param color
   */
  normalizeColor(color) {
    return Array.isArray(color) && (color = lib_exports.rgb2hex(color)), typeof color == "number" ? lib_exports.hex2string(color) : color;
  }
  /** Convert the internal drop-shadow settings to CSS text-shadow */
  dropShadowToCSS() {
    let color = this.normalizeColor(this.dropShadowColor);
    const alpha = this.dropShadowAlpha, x = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance), y = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    color.startsWith("#") && alpha < 1 && (color += (alpha * 255 | 0).toString(16).padStart(2, "0"));
    const position = `${x}px ${y}px`;
    return this.dropShadowBlur > 0 ? `text-shadow: ${position} ${this.dropShadowBlur}px ${color}` : `text-shadow: ${position} ${color}`;
  }
  /** Resets all properties to the defaults specified in TextStyle.prototype._default */
  reset() {
    Object.assign(this, _HTMLTextStyle2.defaultOptions);
  }
  /**
   * Called after the image is loaded but before drawing to the canvas.
   * Mostly used to handle Safari's font loading bug.
   * @ignore
   */
  onBeforeDraw() {
    const { fontsDirty: prevFontsDirty } = this;
    return this.fontsDirty = false, this.isSafari && this._fonts.length > 0 && prevFontsDirty ? new Promise((resolve) => setTimeout(resolve, 100)) : Promise.resolve();
  }
  /**
   * Proving that Safari is the new IE
   * @ignore
   */
  get isSafari() {
    const { userAgent } = settings.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(userAgent);
  }
  set fillGradientStops(_value) {
    console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText");
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(_value) {
    console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText");
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(_value) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(_value) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(_value) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(_value) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(_value) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
_HTMLTextStyle.availableFonts = {}, /**
* List of default options, these are largely the same as TextStyle,
* with the exception of whiteSpace, which is set to 'normal' by default.
*/
_HTMLTextStyle.defaultOptions = {
  /** Align */
  align: "left",
  /** Break words */
  breakWords: false,
  /** Drop shadow */
  dropShadow: false,
  /** Drop shadow alpha */
  dropShadowAlpha: 1,
  /**
   * Drop shadow angle
   * @type {number}
   * @default Math.PI / 6
   */
  dropShadowAngle: Math.PI / 6,
  /** Drop shadow blur */
  dropShadowBlur: 0,
  /** Drop shadow color */
  dropShadowColor: "black",
  /** Drop shadow distance */
  dropShadowDistance: 5,
  /** Fill */
  fill: "black",
  /** Font family */
  fontFamily: "Arial",
  /** Font size */
  fontSize: 26,
  /** Font style */
  fontStyle: "normal",
  /** Font variant */
  fontVariant: "normal",
  /** Font weight */
  fontWeight: "normal",
  /** Letter spacing */
  letterSpacing: 0,
  /** Line height */
  lineHeight: 0,
  /** Padding */
  padding: 0,
  /** Stroke */
  stroke: "black",
  /** Stroke thickness */
  strokeThickness: 0,
  /** White space */
  whiteSpace: "normal",
  /** Word wrap */
  wordWrap: false,
  /** Word wrap width */
  wordWrapWidth: 100
};
var HTMLTextStyle = _HTMLTextStyle;

// node_modules/@pixi/text-html/lib/HTMLText.mjs
var _HTMLText = class _HTMLText2 extends Sprite {
  /**
   * @param {string} [text] - Text contents
   * @param {PIXI.HTMLTextStyle|PIXI.TextStyle|PIXI.ITextStyle} [style] - Style setting to use.
   *        Strongly recommend using an HTMLTextStyle object. Providing a PIXI.TextStyle
   *        will convert the TextStyle to an HTMLTextStyle and will no longer be linked.
   */
  constructor(text = "", style = {}) {
    super(Texture.EMPTY), this._text = null, this._style = null, this._autoResolution = true, this.localStyleID = -1, this.dirty = false, this._updateID = 0, this.ownsStyle = false;
    const image = new Image(), texture = Texture.from(image, {
      scaleMode: settings.SCALE_MODE,
      resourceOptions: {
        autoLoad: false
      }
    });
    texture.orig = new Rectangle(), texture.trim = new Rectangle(), this.texture = texture;
    const nssvg = "http://www.w3.org/2000/svg", nsxhtml = "http://www.w3.org/1999/xhtml", svgRoot = document.createElementNS(nssvg, "svg"), foreignObject = document.createElementNS(nssvg, "foreignObject"), domElement = document.createElementNS(nsxhtml, "div"), styleElement = document.createElementNS(nsxhtml, "style");
    foreignObject.setAttribute("width", "10000"), foreignObject.setAttribute("height", "10000"), foreignObject.style.overflow = "hidden", svgRoot.appendChild(foreignObject), this.maxWidth = _HTMLText2.defaultMaxWidth, this.maxHeight = _HTMLText2.defaultMaxHeight, this._domElement = domElement, this._styleElement = styleElement, this._svgRoot = svgRoot, this._foreignObject = foreignObject, this._foreignObject.appendChild(styleElement), this._foreignObject.appendChild(domElement), this._image = image, this._loadImage = new Image(), this._autoResolution = _HTMLText2.defaultAutoResolution, this._resolution = _HTMLText2.defaultResolution ?? settings.RESOLUTION, this.text = text, this.style = style;
  }
  /**
   * Calculate the size of the output text without actually drawing it.
   * This includes the `padding` in the `style` object.
   * This can be used as a fast-pass to do things like text-fitting.
   * @param {object} [overrides] - Overrides for the text, style, and resolution.
   * @param {string} [overrides.text] - The text to measure, if not specified, the current text is used.
   * @param {PIXI.HTMLTextStyle} [overrides.style] - The style to measure, if not specified, the current style is used.
   * @param {number} [overrides.resolution] - The resolution to measure, if not specified, the current resolution is used.
   * @returns {PIXI.ISize} Width and height of the measured text.
   */
  measureText(overrides) {
    var _a, _b;
    const { text, style, resolution } = Object.assign({
      text: this._text,
      style: this._style,
      resolution: this._resolution
    }, overrides);
    Object.assign(this._domElement, {
      innerHTML: text,
      style: style.toCSS(resolution)
    }), this._styleElement.textContent = style.toGlobalCSS(), document.body.appendChild(this._svgRoot);
    const contentBounds = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const { width, height } = contentBounds;
    (width > this.maxWidth || height > this.maxHeight) && console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");
    const contentWidth = Math.min(this.maxWidth, Math.ceil(width)), contentHeight = Math.min(this.maxHeight, Math.ceil(height));
    return this._svgRoot.setAttribute("width", contentWidth.toString()), this._svgRoot.setAttribute("height", contentHeight.toString()), text !== this._text && (this._domElement.innerHTML = this._text), style !== this._style && (Object.assign(this._domElement, { style: (_a = this._style) == null ? void 0 : _a.toCSS(resolution) }), this._styleElement.textContent = (_b = this._style) == null ? void 0 : _b.toGlobalCSS()), {
      width: contentWidth + style.padding * 2,
      height: contentHeight + style.padding * 2
    };
  }
  /**
   * Manually refresh the text.
   * @public
   * @param {boolean} respectDirty - Whether to abort updating the
   *        text if the Text isn't dirty and the function is called.
   */
  async updateText(respectDirty = true) {
    const { style, _image: image, _loadImage: loadImage } = this;
    if (this.localStyleID !== style.styleID && (this.dirty = true, this.localStyleID = style.styleID), !this.dirty && respectDirty)
      return;
    const { width, height } = this.measureText();
    image.width = loadImage.width = Math.ceil(Math.max(1, width)), image.height = loadImage.height = Math.ceil(Math.max(1, height)), this._updateID++;
    const updateID = this._updateID;
    await new Promise((resolve) => {
      loadImage.onload = async () => {
        if (updateID < this._updateID) {
          resolve();
          return;
        }
        await style.onBeforeDraw(), image.src = loadImage.src, loadImage.onload = null, loadImage.src = "", this.updateTexture(), resolve();
      };
      const svgURL = new XMLSerializer().serializeToString(this._svgRoot);
      loadImage.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svgURL)}`;
    });
  }
  /** The raw image element that is rendered under-the-hood. */
  get source() {
    return this._image;
  }
  /**
   * Update the texture resource.
   * @private
   */
  updateTexture() {
    const { style, texture, _image: image, resolution } = this, { padding } = style, { baseTexture } = texture;
    texture.trim.width = texture._frame.width = image.width / resolution, texture.trim.height = texture._frame.height = image.height / resolution, texture.trim.x = -padding, texture.trim.y = -padding, texture.orig.width = texture._frame.width - padding * 2, texture.orig.height = texture._frame.height - padding * 2, this._onTextureUpdate(), baseTexture.setRealSize(image.width, image.height, resolution), this.dirty = false;
  }
  /**
   * Renders the object using the WebGL renderer
   * @param {PIXI.Renderer} renderer - The renderer
   * @private
   */
  _render(renderer) {
    this._autoResolution && this._resolution !== renderer.resolution && (this._resolution = renderer.resolution, this.dirty = true), this.updateText(true), super._render(renderer);
  }
  /**
   * Renders the object using the Canvas Renderer.
   * @private
   * @param {PIXI.CanvasRenderer} renderer - The renderer
   */
  _renderCanvas(renderer) {
    this._autoResolution && this._resolution !== renderer.resolution && (this._resolution = renderer.resolution, this.dirty = true), this.updateText(true), super._renderCanvas(renderer);
  }
  /**
   * Get the local bounds.
   * @param {PIXI.Rectangle} rect - Input rectangle.
   * @returns {PIXI.Rectangle} Local bounds
   */
  getLocalBounds(rect) {
    return this.updateText(true), super.getLocalBounds(rect);
  }
  _calculateBounds() {
    this.updateText(true), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  /**
   * Handle dirty style changes
   * @private
   */
  _onStyleChange() {
    this.dirty = true;
  }
  /**
   * Destroy this Text object. Don't use after calling.
   * @param {boolean|object} options - Same as Sprite destroy options.
   */
  destroy(options) {
    var _a, _b, _c, _d, _e;
    typeof options == "boolean" && (options = { children: options }), options = Object.assign({}, _HTMLText2.defaultDestroyOptions, options), super.destroy(options);
    const forceClear = null;
    this.ownsStyle && ((_a = this._style) == null ? void 0 : _a.cleanFonts()), this._style = forceClear, (_b = this._svgRoot) == null ? void 0 : _b.remove(), this._svgRoot = forceClear, (_c = this._domElement) == null ? void 0 : _c.remove(), this._domElement = forceClear, (_d = this._foreignObject) == null ? void 0 : _d.remove(), this._foreignObject = forceClear, (_e = this._styleElement) == null ? void 0 : _e.remove(), this._styleElement = forceClear, this._loadImage.src = "", this._loadImage.onload = null, this._loadImage = forceClear, this._image.src = "", this._image = forceClear;
  }
  /**
   * Get the width in pixels.
   * @member {number}
   */
  get width() {
    return this.updateText(true), Math.abs(this.scale.x) * this._image.width / this.resolution;
  }
  set width(value) {
    this.updateText(true);
    const s = lib_exports.sign(this.scale.x) || 1;
    this.scale.x = s * value / this._image.width / this.resolution, this._width = value;
  }
  /**
   * Get the height in pixels.
   * @member {number}
   */
  get height() {
    return this.updateText(true), Math.abs(this.scale.y) * this._image.height / this.resolution;
  }
  set height(value) {
    this.updateText(true);
    const s = lib_exports.sign(this.scale.y) || 1;
    this.scale.y = s * value / this._image.height / this.resolution, this._height = value;
  }
  /** The base style to render with text. */
  get style() {
    return this._style;
  }
  set style(style) {
    this._style !== style && (style = style || {}, style instanceof HTMLTextStyle ? (this.ownsStyle = false, this._style = style) : style instanceof TextStyle ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"), this.ownsStyle = true, this._style = HTMLTextStyle.from(style)) : (this.ownsStyle = true, this._style = new HTMLTextStyle(style)), this.localStyleID = -1, this.dirty = true);
  }
  /**
   * Contents of text. This can be HTML text and include tags.
   * @example
   * const text = new HTMLText('This is a <em>styled</em> text!');
   * @member {string}
   */
  get text() {
    return this._text;
  }
  set text(text) {
    text = String(text === "" || text === null || text === void 0 ? " " : text), text = this.sanitiseText(text), this._text !== text && (this._text = text, this.dirty = true);
  }
  /**
   * The resolution / device pixel ratio of the canvas.
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @member {number}
   * @default 1
   */
  get resolution() {
    return this._resolution;
  }
  set resolution(value) {
    this._autoResolution = false, this._resolution !== value && (this._resolution = value, this.dirty = true);
  }
  /**
   * Sanitise text - replace `<br>` with `<br/>`, `&nbsp;` with `&#160;`
   * @param text
   * @see https://www.sitepoint.com/community/t/xhtml-1-0-transitional-xml-parsing-error-entity-nbsp-not-defined/3392/3
   */
  sanitiseText(text) {
    return text.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;");
  }
};
_HTMLText.defaultDestroyOptions = {
  texture: true,
  children: false,
  baseTexture: true
}, /** Default maxWidth, set at construction */
_HTMLText.defaultMaxWidth = 2024, /** Default maxHeight, set at construction */
_HTMLText.defaultMaxHeight = 2024, /** Default autoResolution for all HTMLText objects */
_HTMLText.defaultAutoResolution = true;
var HTMLText = _HTMLText;
export {
  ALPHA_MODES,
  AbstractMultiResource,
  AccessibilityManager,
  AlphaFilter,
  AnimatedSprite,
  Application,
  ArrayResource,
  Assets,
  AssetsClass,
  Attribute,
  BLEND_MODES,
  BUFFER_BITS,
  BUFFER_TYPE,
  BackgroundSystem,
  BaseImageResource,
  BasePrepare,
  BaseRenderTexture,
  BaseTexture,
  BatchDrawCall,
  BatchGeometry,
  BatchRenderer,
  BatchShaderGenerator,
  BatchSystem,
  BatchTextureArray,
  BitmapFont,
  BitmapFontData,
  BitmapText,
  BlobResource,
  BlurFilter,
  BlurFilterPass,
  Bounds,
  BrowserAdapter,
  Buffer,
  BufferResource,
  BufferSystem,
  CLEAR_MODES,
  COLOR_MASK_BITS,
  Cache,
  CanvasResource,
  Circle,
  Color,
  ColorMatrixFilter,
  CompressedTextureResource,
  Container,
  ContextSystem,
  CountLimiter,
  CubeResource,
  DEG_TO_RAD,
  DRAW_MODES,
  DisplacementFilter,
  DisplayObject,
  ENV,
  Ellipse,
  EventBoundary,
  EventSystem,
  ExtensionType,
  Extract,
  FORMATS,
  FORMATS_TO_COMPONENTS,
  FXAAFilter,
  FederatedDisplayObject,
  FederatedEvent,
  FederatedMouseEvent,
  FederatedPointerEvent,
  FederatedWheelEvent,
  FillStyle,
  Filter,
  FilterState,
  FilterSystem,
  Framebuffer,
  FramebufferSystem,
  GC_MODES,
  GLFramebuffer,
  GLProgram,
  GLTexture,
  GRAPHICS_CURVES,
  GenerateTextureSystem,
  Geometry,
  GeometrySystem,
  Graphics,
  GraphicsData,
  GraphicsGeometry,
  HTMLText,
  HTMLTextStyle,
  IGLUniformData,
  INSTALLED,
  INTERNAL_FORMATS,
  INTERNAL_FORMAT_TO_BYTES_PER_PIXEL,
  ImageBitmapResource,
  ImageResource,
  LINE_CAP,
  LINE_JOIN,
  LineStyle,
  LoaderParserPriority,
  MASK_TYPES,
  MIPMAP_MODES,
  MSAA_QUALITY,
  MaskData,
  MaskSystem,
  Matrix,
  Mesh,
  MeshBatchUvs,
  MeshGeometry,
  MeshMaterial,
  MultisampleSystem,
  NineSlicePlane,
  NoiseFilter,
  ObjectRenderer,
  ObjectRendererSystem,
  ObservablePoint,
  PI_2,
  PRECISION,
  ParticleContainer,
  ParticleRenderer,
  PlaneGeometry,
  PluginSystem,
  Point,
  Polygon,
  Prepare,
  Program,
  ProjectionSystem,
  Quad,
  QuadUv,
  RAD_TO_DEG,
  RENDERER_TYPE,
  Rectangle,
  RenderTexture,
  RenderTexturePool,
  RenderTextureSystem,
  Renderer,
  ResizePlugin,
  Resource,
  RopeGeometry,
  RoundedRectangle,
  Runner,
  SAMPLER_TYPES,
  SCALE_MODES,
  SHAPES,
  SVGResource,
  ScissorSystem,
  Shader,
  ShaderSystem,
  SimpleMesh,
  SimplePlane,
  SimpleRope,
  Sprite,
  SpriteMaskFilter,
  Spritesheet,
  StartupSystem,
  State,
  StateSystem,
  StencilSystem,
  SystemManager,
  TARGETS,
  TEXT_GRADIENT,
  TYPES,
  TYPES_TO_BYTES_PER_COMPONENT,
  TYPES_TO_BYTES_PER_PIXEL,
  TemporaryDisplayObject,
  Text,
  TextFormat,
  TextMetrics,
  TextStyle,
  Texture,
  TextureGCSystem,
  TextureMatrix,
  TextureSystem,
  TextureUvs,
  Ticker,
  TickerPlugin,
  TilingSprite,
  TilingSpriteRenderer,
  TimeLimiter,
  Transform,
  TransformFeedback,
  TransformFeedbackSystem,
  UPDATE_PRIORITY,
  UniformGroup,
  VERSION,
  VideoResource,
  ViewSystem,
  ViewableBuffer,
  WRAP_MODES,
  XMLFormat,
  XMLStringFormat,
  accessibleTarget,
  autoDetectFormat,
  autoDetectRenderer,
  autoDetectResource,
  cacheTextureArray,
  checkDataUrl,
  checkExtension,
  checkMaxIfStatementsInShader,
  convertToList,
  copySearchParams,
  createStringVariations,
  createTexture,
  createUBOElements,
  curves,
  defaultFilterVertex,
  defaultVertex,
  detectAvif,
  detectCompressedTextures,
  detectDefaults,
  detectMp4,
  detectOgv,
  detectWebm,
  detectWebp,
  extensions,
  filters,
  generateProgram,
  generateUniformBufferSync,
  getFontFamilyName,
  getTestContext,
  getUBOData,
  graphicsUtils,
  groupD8,
  isMobile,
  isSingleItem,
  loadBitmapFont,
  loadDDS,
  loadImageBitmap,
  loadJson,
  loadKTX,
  loadSVG,
  loadTextures,
  loadTxt,
  loadVideo,
  loadWebFont,
  parseDDS,
  parseKTX,
  resolveCompressedTextureUrl,
  resolveTextureUrl,
  settings,
  spritesheetAsset,
  uniformParsers,
  unsafeEvalSupported,
  lib_exports as utils
};
//# sourceMappingURL=pixi__js.js.map
