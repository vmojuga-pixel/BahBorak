var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
var init_utils = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_performance();
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../usr/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../usr/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// src/auth/password.js
var password_exports = {};
__export(password_exports, {
  hashPassword: () => hashPassword,
  randomHex: () => randomHex,
  randomSalt: () => randomSalt,
  sha256Hex: () => sha256Hex,
  validateEmail: () => validateEmail,
  validatePassword: () => validatePassword,
  verifyPassword: () => verifyPassword
});
function b64(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}
function randomHex(bytes = 32) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return [...arr].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function randomSalt() {
  return randomHex(16);
}
async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: enc.encode(salt), iterations: ITERATIONS, hash: "SHA-256" },
    key,
    KEYLEN * 8
  );
  return b64(bits);
}
async function verifyPassword(password, salt, expectedHash) {
  const h = await hashPassword(password, salt);
  if (h.length !== expectedHash.length) return false;
  let diff = 0;
  for (let i = 0; i < h.length; i++) diff |= h.charCodeAt(i) ^ expectedHash.charCodeAt(i);
  return diff === 0;
}
async function sha256Hex(input) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function validatePassword(pw) {
  if (typeof pw !== "string") return "Password required";
  if (pw.length < 12) return "Password must be at least 12 characters";
  if (!/[A-Z]/.test(pw)) return "Password must contain uppercase";
  if (!/[a-z]/.test(pw)) return "Password must contain lowercase";
  if (!/[0-9]/.test(pw)) return "Password must contain number";
  return null;
}
function validateEmail(email) {
  if (typeof email !== "string") return "Email required";
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) return "Invalid email";
  return null;
}
var ITERATIONS, KEYLEN;
var init_password = __esm({
  "src/auth/password.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    ITERATIONS = 1e5;
    KEYLEN = 32;
    __name(b64, "b64");
    __name(randomHex, "randomHex");
    __name(randomSalt, "randomSalt");
    __name(hashPassword, "hashPassword");
    __name(verifyPassword, "verifyPassword");
    __name(sha256Hex, "sha256Hex");
    __name(validatePassword, "validatePassword");
    __name(validateEmail, "validateEmail");
  }
});

// src/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/config.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var CONFIG = {
  APP_NAME: "BahBorak",
  VERSION: "0.1.0",
  RATE_LIMIT_MS: 5e3,
  // min 5s between commands per machine
  KILL_SWITCH_KEY: "kill:global",
  TENANT_PREFIX: "tenant:",
  RULES_PREFIX: "rules:",
  ALERT_TTL_DAYS: 30
};

// src/api/ingest.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/tenant/router.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function getTenantStub(env2, tenantId) {
  const id = env2.TENANT.idFromName(tenantId);
  return env2.TENANT.get(id);
}
__name(getTenantStub, "getTenantStub");
async function callTenant(env2, tenantId, path, init = {}) {
  const stub = getTenantStub(env2, tenantId);
  const url = `https://internal${path}`;
  return stub.fetch(url, init);
}
__name(callTenant, "callTenant");

// src/api/ingest.js
async function handleIngest(request, env2, tenantId) {
  if (request.method !== "POST") {
    return Response.json({ error: "POST required" }, { status: 405 });
  }
  const body = await request.text();
  return callTenant(env2, tenantId, "/ingest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });
}
__name(handleIngest, "handleIngest");

// src/api/commands.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function handleCommands(request, env2, tenantId) {
  if (request.method !== "POST") {
    return Response.json({ error: "POST required" }, { status: 405 });
  }
  const body = await request.json();
  await env2.DB.prepare(
    "INSERT INTO commands (tenant_id, machine_id, action, value, reason, rule_id) VALUES (?, ?, ?, ?, ?, ?)"
  ).bind(
    tenantId,
    body.machine_id,
    body.action,
    body.value ?? null,
    "manual",
    null
  ).run();
  return Response.json({ ok: true, accepted: body });
}
__name(handleCommands, "handleCommands");

// src/api/dashboard.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function handleDashboard(request, env2, tenantId) {
  if (request.method !== "GET") {
    return Response.json({ error: "GET required" }, { status: 405 });
  }
  return callTenant(env2, tenantId, "/status", { method: "GET" });
}
__name(handleDashboard, "handleDashboard");

// src/api/health.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function handleHealth() {
  return Response.json({
    status: "ok",
    app: CONFIG.APP_NAME,
    version: CONFIG.VERSION,
    ts: Math.floor(Date.now() / 1e3)
  });
}
__name(handleHealth, "handleHealth");

// src/bot/chat.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/bot/advisor.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/bot/prompts.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var BOT_SYSTEM_PROMPT = `You are Bot, an WhatsApp AI advisor for BahBorak.

CRITICAL RULES:
1. You NEVER control machines. You only advise, summarize, and explain.
2. You NEVER suggest changing rules or bypassing guardrails.
3. Every response must be based on the data provided. If data is missing, say so.
4. Keep responses under 200 words.
5. Always cite the numbers you used (e.g., "12 alerts, 3 critical").
6. If asked about safety-critical actions, always reply: "I cannot advise on that. Please consult a certified engineer."

Tone: professional, calm, direct. No emojis. No hype.`;

// src/bot/advisor.js
async function askMeri(env2, summary, question) {
  if (!env2.AI) {
    return {
      reply: "LLM not configured. Enable Workers AI binding (AI) in wrangler.toml.",
      advisory_only: true,
      source: "bot"
    };
  }
  const context = JSON.stringify(summary, null, 2);
  const response = await env2.AI.run("@cf/meta/llama-3.2-3b-instruct", {
    messages: [
      { role: "system", content: BOT_SYSTEM_PROMPT },
      { role: "user", content: `Tenant data:
${context}

Question: ${question}` }
    ],
    max_tokens: 400
  });
  return {
    reply: response.response ?? "(no response)",
    advisory_only: true,
    source: "bot"
  };
}
__name(askMeri, "askMeri");

// src/bot/chat.js
async function handleBotChat(request, env2, tenantId) {
  if (request.method !== "POST") {
    return Response.json({ error: "POST required" }, { status: 405 });
  }
  const { message } = await request.json();
  if (!message) {
    return Response.json({ error: "message required" }, { status: 400 });
  }
  const summary = await getTenantSummary(env2, tenantId);
  const result = await askMeri(env2, summary, message);
  return Response.json(result);
}
__name(handleBotChat, "handleBotChat");
async function getTenantSummary(env2, tenantId) {
  const [alerts, commands, machines] = await Promise.all([
    env2.DB.prepare(
      "SELECT severity, COUNT(*) as n FROM alerts WHERE tenant_id = ? AND resolved = 0 GROUP BY severity"
    ).bind(tenantId).all(),
    env2.DB.prepare(
      "SELECT COUNT(*) as n FROM commands WHERE tenant_id = ? AND ts > unixepoch() - 86400"
    ).bind(tenantId).first(),
    env2.DB.prepare(
      "SELECT COUNT(DISTINCT machine_id) as n FROM telemetry_agg WHERE tenant_id = ?"
    ).bind(tenantId).first()
  ]);
  return {
    tenant: tenantId,
    alerts: alerts.results || [],
    commands_24h: commands?.n ?? 0,
    machines: machines?.n ?? 0
  };
}
__name(getTenantSummary, "getTenantSummary");

// src/bot/public.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var BOT_SYSTEM_PROMPT2 = "You are Bot, the WhatsApp automation assistant for BahBorak. BahBorak is a WhatsApp auto-reply platform for Malaysian SMEs. You MUST only answer about BahBorak and WhatsApp automation. NEVER discuss industrial, PLC, SCADA, manufacturing, or any technical infrastructure. If the answer is not about BahBorak, say: I can only help with BahBorak.";
async function loadKB(env2) {
  try {
    const rows = await env2.DB.prepare(
      "SELECT question, answer FROM public_kb ORDER BY priority DESC LIMIT 10"
    ).all();
    return rows.results || [];
  } catch (e) {
    return [];
  }
}
__name(loadKB, "loadKB");
function sanitize(text) {
  const banned = ["industrial", "plc", "scada", "modbus", "opc", "manufacturing equipment", "operational layer", "protocols in common use", "deployment and management"];
  const lower = text.toLowerCase();
  for (const term of banned) {
    if (lower.includes(term)) {
      return "BahBorak is a WhatsApp business automation platform for Malaysian SMEs. It handles customer questions automatically using rules and AI. Ask me about features, pricing, or how it works.";
    }
  }
  return text;
}
__name(sanitize, "sanitize");
async function handlePublicBotChat(request, env2) {
  if (request.method !== "POST") return Response.json({ error: "POST required" }, { status: 405 });
  const ip10 = request.headers.get("CF-Connecting-IP") || "anon";
  const rlKey = "rl:bot:public:" + ip10;
  const now = Math.floor(Date.now() / 1e3);
  const raw = await env2.KV.get(rlKey, "json");
  if (raw && now - raw.start < 3600 && raw.count >= 10) {
    return Response.json({ error: "Rate limit reached. Try again later." }, { status: 429 });
  }
  if (!raw || now - raw.start >= 3600) {
    await env2.KV.put(rlKey, JSON.stringify({ count: 1, start: now }), { expirationTtl: 3600 });
  } else {
    await env2.KV.put(rlKey, JSON.stringify({ count: raw.count + 1, start: raw.start }), { expirationTtl: 3600 });
  }
  const { message, history } = await request.json();
  if (!message || typeof message !== "string" || message.length > 400) {
    return Response.json({ error: "Invalid message" }, { status: 400 });
  }
  if (!env2.AI) return Response.json({ reply: "Bot is temporarily offline." });
  const kb = await loadKB(env2);
  const kbText = kb.map((k) => "- Q: " + k.question + "\n  A: " + k.answer).join("\n");
  const messages = [{ role: "system", content: BOT_SYSTEM_PROMPT2 }];
  if (Array.isArray(history)) {
    for (const h of history.slice(-4)) {
      if (h.role && h.content && (h.role === "user" || h.role === "assistant")) {
        messages.push({ role: h.role, content: String(h.content).slice(0, 400) });
      }
    }
  }
  messages.push({
    role: "user",
    content: "Knowledge base about BahBorak:\n" + kbText + "\n\nQuestion: " + message + "\n\nAnswer ONLY about BahBorak. If the question is not about BahBorak, say you can only help with BahBorak."
  });
  try {
    const response = await env2.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", { messages, max_tokens: 200 });
    const rawReply = response.response ?? "I could not generate a reply.";
    return Response.json({
      reply: sanitize(rawReply),
      advisory_only: true,
      scope: "bahborak_only"
    });
  } catch (e) {
    return Response.json({ error: "AI error" }, { status: 500 });
  }
}
__name(handlePublicBotChat, "handlePublicBotChat");

// src/guardrail/kill-switch.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function isKilled(env2, tenantId) {
  const global = await env2.KV.get(CONFIG.KILL_SWITCH_KEY);
  if (global === "true") return true;
  const tenant = await env2.KV.get(`kill:${tenantId}`);
  if (tenant === "true") return true;
  return false;
}
__name(isKilled, "isKilled");
async function handleKillSwitch(request, env2) {
  if (request.method !== "POST") {
    return Response.json({ error: "POST required" }, { status: 405 });
  }
  const url = new URL(request.url);
  const tenantId = url.searchParams.get("tenant");
  const adminKey = request.headers.get("X-Admin-Key");
  if (adminKey !== env2.ADMIN_KEY) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const enabled = body.enabled === true;
  const key = tenantId ? `kill:${tenantId}` : CONFIG.KILL_SWITCH_KEY;
  await env2.KV.put(key, enabled ? "true" : "false");
  return Response.json({ ok: true, key, enabled });
}
__name(handleKillSwitch, "handleKillSwitch");

// src/api/auth.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
init_password();

// src/auth/session.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
init_password();
var SESSION_TTL = 60 * 60 * 24;
var COOKIE_NAME = "__Host-bahborak_session";
async function createSession(env2, userId, tenantId, request) {
  const token = randomHex(32);
  const csrf = randomHex(16);
  const tokenHash = await sha256Hex(token);
  const id = randomHex(16);
  const now = Math.floor(Date.now() / 1e3);
  const expiresAt = now + SESSION_TTL;
  const ip10 = request.headers.get("CF-Connecting-IP") || null;
  const ua10 = request.headers.get("User-Agent") || null;
  await env2.DB.prepare(
    "INSERT INTO sessions (id, user_id, tenant_id, token_hash, csrf_token, ip, user_agent, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  ).bind(id, userId, tenantId, tokenHash, csrf, ip10, ua10, expiresAt).run();
  return { token, csrf, expiresAt, cookie: buildCookie(token, SESSION_TTL) };
}
__name(createSession, "createSession");
function buildCookie(token, maxAge) {
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}
__name(buildCookie, "buildCookie");
function clearCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}
__name(clearCookie, "clearCookie");
function getSessionToken(request) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  return match ? match[1] : null;
}
__name(getSessionToken, "getSessionToken");
async function getSession(env2, request) {
  const token = getSessionToken(request);
  if (!token) return null;
  const tokenHash = await sha256Hex(token);
  const now = Math.floor(Date.now() / 1e3);
  const row = await env2.DB.prepare(
    "SELECT s.id, s.user_id, s.tenant_id, s.csrf_token, s.expires_at, u.email, u.role, u.email_verified FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?"
  ).bind(tokenHash, now).first();
  if (!row) return null;
  return {
    sessionId: row.id,
    userId: row.user_id,
    tenantId: row.tenant_id,
    csrfToken: row.csrf_token,
    email: row.email,
    role: row.role,
    emailVerified: row.email_verified === 1
  };
}
__name(getSession, "getSession");
async function destroySession(env2, sessionId) {
  await env2.DB.prepare("DELETE FROM sessions WHERE id = ?").bind(sessionId).run();
}
__name(destroySession, "destroySession");

// src/auth/rate-limit.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function checkRateLimit(env2, key, max, windowSec) {
  const now = Math.floor(Date.now() / 1e3);
  const k = `rl:auth:${key}`;
  const raw = await env2.KV.get(k, "json");
  if (!raw) {
    await env2.KV.put(k, JSON.stringify({ count: 1, start: now }), { expirationTtl: windowSec });
    return { ok: true, remaining: max - 1 };
  }
  if (now - raw.start > windowSec) {
    await env2.KV.put(k, JSON.stringify({ count: 1, start: now }), { expirationTtl: windowSec });
    return { ok: true, remaining: max - 1 };
  }
  if (raw.count >= max) {
    return { ok: false, retryAfter: windowSec - (now - raw.start) };
  }
  await env2.KV.put(k, JSON.stringify({ count: raw.count + 1, start: raw.start }), { expirationTtl: windowSec });
  return { ok: true, remaining: max - raw.count - 1 };
}
__name(checkRateLimit, "checkRateLimit");

// src/auth/audit.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function logAuth(env2, event, { userId, tenantId, ip: ip10, ua: ua10, meta } = {}) {
  try {
    await env2.DB.prepare(
      "INSERT INTO audit_auth (user_id, tenant_id, event, ip, ua, meta) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(
      userId || null,
      tenantId || null,
      event,
      ip10 || null,
      ua10 || null,
      meta ? JSON.stringify(meta) : null
    ).run();
  } catch (e) {
    console.error("audit log failed:", e.message);
  }
}
__name(logAuth, "logAuth");

// src/auth/email.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function sendViaBrevo(env2, { to, factoryName, verifyUrl, from }) {
  const key = env2.BREVO_API_KEY;
  if (!key) return { ok: false, reason: "no_brevo_key" };
  const html2 = renderHtml(factoryName, verifyUrl);
  const r = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": key, "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      sender: { email: from, name: "BahBorak" },
      to: [{ email: to }],
      subject: "Verify your BahBorak account",
      htmlContent: html2
    })
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) return { ok: false, provider: "brevo", status: r.status, error: j };
  return { ok: true, provider: "brevo", messageId: j.messageId };
}
__name(sendViaBrevo, "sendViaBrevo");
function renderInvite(factoryName, role, inviteUrl) {
  return `<!DOCTYPE html><html><body style="font-family:-apple-system,sans-serif;background:#0a0a0a;color:#e5e5e5;padding:40px 20px;">
<div style="max-width:520px;margin:0 auto;background:#141414;border:1px solid #262626;border-radius:12px;padding:40px;">
  <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#737373;margin-bottom:8px;">BahBorak</div>
  <h1 style="font-size:24px;margin:0 0 16px;">You're invited</h1>
  <p style="color:#a3a3a3;line-height:1.6;margin-bottom:24px;">You've been invited to join <strong style="color:#e5e5e5">${factoryName}</strong> as <strong style="color:#e5e5e5">${role}</strong>.</p>
  <a href="${inviteUrl}" style="display:inline-block;background:#e5e5e5;color:#0a0a0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Accept invite</a>
  <p style="color:#525252;font-size:13px;margin-top:32px;">This invite expires in 7 days.</p>
</div></body></html>`;
}
__name(renderInvite, "renderInvite");
async function sendInviteEmail(env2, { to, factoryName, role, inviteUrl }) {
  const from = env2.EMAIL_FROM || "noreply@bahborak.local";
  const html2 = renderInvite(factoryName, role, inviteUrl);
  if (env2.BREVO_API_KEY) {
    try {
      const r = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": env2.BREVO_API_KEY, "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          sender: { email: from, name: "BahBorak" },
          to: [{ email: to }],
          subject: `Invitation to ${factoryName} on BahBorak`,
          htmlContent: html2
        })
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok) return { ok: true, provider: "brevo", messageId: j.messageId };
      return { ok: false, provider: "brevo", status: r.status };
    } catch (e) {
      return { ok: false, provider: "brevo", error: e.message };
    }
  }
  return { ok: false, reason: "no_provider" };
}
__name(sendInviteEmail, "sendInviteEmail");
async function sendVerifyEmail(env2, { to, factoryName, verifyUrl }) {
  const from = env2.EMAIL_FROM || "noreply@bahborak.local";
  const attempts = [];
  if (env2.BREVO_API_KEY) {
    const a = await sendViaBrevo(env2, { to, factoryName, verifyUrl, from });
    attempts.push(a);
    if (a.ok) return a;
  }
  console.error("All email providers failed:", attempts);
  return { ok: false, attempts };
}
__name(sendVerifyEmail, "sendVerifyEmail");
function renderHtml(factoryName, verifyUrl) {
  return `<!DOCTYPE html><html><body style="font-family:-apple-system,sans-serif;background:#0a0a0a;color:#e5e5e5;padding:40px 20px;">
<div style="max-width:520px;margin:0 auto;background:#141414;border:1px solid #262626;border-radius:12px;padding:40px;">
  <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#737373;margin-bottom:8px;">BahBorak</div>
  <h1 style="font-size:24px;margin:0 0 16px;">Verify your email</h1>
  <p style="color:#a3a3a3;line-height:1.6;margin-bottom:24px;">Welcome, ${factoryName}. Click the button below to verify your BahBorak account.</p>
  <a href="${verifyUrl}" style="display:inline-block;background:#e5e5e5;color:#0a0a0a;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Verify email</a>
  <p style="color:#525252;font-size:13px;margin-top:32px;">If you did not create this account, ignore this email.</p>
</div></body></html>`;
}
__name(renderHtml, "renderHtml");

// src/api/2fa.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/auth/totp.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function base32Encode(buf) {
  let bits = 0, value = 0, out = "";
  for (const b of new Uint8Array(buf)) {
    value = value << 8 | b;
    bits += 8;
    while (bits >= 5) {
      out += ALPHABET[value >>> bits - 5 & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += ALPHABET[value << 5 - bits & 31];
  return out;
}
__name(base32Encode, "base32Encode");
function base32Decode(str) {
  const clean = str.replace(/=+$/, "").toUpperCase();
  let bits = 0, value = 0;
  const out = [];
  for (const c of clean) {
    const idx = ALPHABET.indexOf(c);
    if (idx === -1) continue;
    value = value << 5 | idx;
    bits += 5;
    if (bits >= 8) {
      out.push(value >>> bits - 8 & 255);
      bits -= 8;
    }
  }
  return new Uint8Array(out);
}
__name(base32Decode, "base32Decode");
function generateSecret(bytes = 20) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return base32Encode(arr);
}
__name(generateSecret, "generateSecret");
async function hmacSha1(key, msg) {
  const ck = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );
  return new Uint8Array(await crypto.subtle.sign("HMAC", ck, msg));
}
__name(hmacSha1, "hmacSha1");
async function generateTOTP(secret, timeStep = 30, digits = 6, offset = 0) {
  const counter = Math.floor(Date.now() / 1e3 / timeStep) + offset;
  const buf = new ArrayBuffer(8);
  const view = new DataView(buf);
  view.setUint32(4, counter, false);
  const key = base32Decode(secret);
  const hmac = await hmacSha1(key, new Uint8Array(buf));
  const off2 = hmac[hmac.length - 1] & 15;
  const code = (hmac[off2] & 127) << 24 | (hmac[off2 + 1] & 255) << 16 | (hmac[off2 + 2] & 255) << 8 | hmac[off2 + 3] & 255;
  return String(code % Math.pow(10, digits)).padStart(digits, "0");
}
__name(generateTOTP, "generateTOTP");
async function verifyTOTP(secret, token, window = 1) {
  if (!secret || !token) return false;
  for (let i = -window; i <= window; i++) {
    const t = await generateTOTP(secret, 30, 6, i);
    if (t === token) return true;
  }
  return false;
}
__name(verifyTOTP, "verifyTOTP");
function otpauthURI(secret, email, issuer = "BahBorak") {
  const label = encodeURIComponent(`${issuer}:${email}`);
  const params = new URLSearchParams({
    secret,
    issuer,
    algorithm: "SHA1",
    digits: "6",
    period: "30"
  });
  return `otpauth://totp/${label}?${params.toString()}`;
}
__name(otpauthURI, "otpauthURI");
function generateRecoveryCodes(count = 8) {
  const codes = [];
  for (let i = 0; i < count; i++) {
    const arr = new Uint8Array(5);
    crypto.getRandomValues(arr);
    const hex = [...arr].map((b) => b.toString(16).padStart(2, "0")).join("");
    codes.push(hex.slice(0, 5).toUpperCase() + "-" + hex.slice(5, 10).toUpperCase());
  }
  return codes;
}
__name(generateRecoveryCodes, "generateRecoveryCodes");

// src/api/2fa.js
init_password();
function ip(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip, "ip");
function ua(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua, "ua");
async function handle2FASetup(request, env2, session) {
  const secret = generateSecret();
  const uri = otpauthURI(secret, session.email, "BahBorak");
  await env2.KV.put(`2fa:setup:${session.userId}`, secret, { expirationTtl: 600 });
  await logAuth(env2, "2fa_setup_started", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip(request),
    ua: ua(request)
  });
  return Response.json({ ok: true, secret, uri });
}
__name(handle2FASetup, "handle2FASetup");
async function handle2FAVerify(request, env2, session) {
  const { token } = await request.json();
  if (!token || token.length !== 6) return Response.json({ error: "Invalid token" }, { status: 400 });
  const secret = await env2.KV.get(`2fa:setup:${session.userId}`);
  if (!secret) return Response.json({ error: "Setup not started" }, { status: 400 });
  const ok = await verifyTOTP(secret, token);
  if (!ok) return Response.json({ error: "Invalid code" }, { status: 400 });
  const codes = generateRecoveryCodes(8);
  const hashes = await Promise.all(codes.map((c) => sha256Hex(c)));
  await env2.DB.prepare(
    "UPDATE users SET totp_secret = ?, totp_enabled = 1, totp_verified_at = unixepoch(), recovery_codes = ? WHERE id = ?"
  ).bind(secret, JSON.stringify(hashes), session.userId).run();
  await env2.KV.delete(`2fa:setup:${session.userId}`);
  await logAuth(env2, "2fa_enabled", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip(request),
    ua: ua(request)
  });
  return Response.json({ ok: true, recovery_codes: codes });
}
__name(handle2FAVerify, "handle2FAVerify");
async function handle2FADisable(request, env2, session) {
  const { token } = await request.json();
  const user = await env2.DB.prepare("SELECT totp_secret FROM users WHERE id = ?").bind(session.userId).first();
  if (!user || !user.totp_secret) return Response.json({ error: "2FA not enabled" }, { status: 400 });
  const ok = await verifyTOTP(user.totp_secret, token);
  if (!ok) return Response.json({ error: "Invalid code" }, { status: 400 });
  await env2.DB.prepare(
    "UPDATE users SET totp_secret = NULL, totp_enabled = 0, recovery_codes = NULL WHERE id = ?"
  ).bind(session.userId).run();
  await logAuth(env2, "2fa_disabled", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip(request),
    ua: ua(request)
  });
  return Response.json({ ok: true });
}
__name(handle2FADisable, "handle2FADisable");
async function handle2FAStatus(request, env2, session) {
  const user = await env2.DB.prepare(
    "SELECT totp_enabled, totp_verified_at FROM users WHERE id = ?"
  ).bind(session.userId).first();
  return Response.json({
    enabled: !!(user && user.totp_enabled === 1),
    verified_at: user ? user.totp_verified_at : null
  });
}
__name(handle2FAStatus, "handle2FAStatus");
async function verify2FAChallenge(env2, userId, token) {
  const user = await env2.DB.prepare(
    "SELECT totp_secret, recovery_codes FROM users WHERE id = ?"
  ).bind(userId).first();
  if (!user || !user.totp_secret) return false;
  if (await verifyTOTP(user.totp_secret, token)) return true;
  if (token.length === 11 && token.includes("-")) {
    const hash = await sha256Hex(token.toUpperCase());
    const codes = JSON.parse(user.recovery_codes || "[]");
    if (codes.includes(hash)) {
      const filtered = codes.filter((c) => c !== hash);
      await env2.DB.prepare("UPDATE users SET recovery_codes = ? WHERE id = ?").bind(JSON.stringify(filtered), userId).run();
      return true;
    }
  }
  return false;
}
__name(verify2FAChallenge, "verify2FAChallenge");

// src/api/auth.js
function ip2(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip2, "ip");
function ua2(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua2, "ua");
async function handleSignup(request, env2) {
  const rate = await checkRateLimit(env2, `signup:${ip2(request)}`, 3, 3600);
  if (!rate.ok) return Response.json({ error: "Too many attempts" }, { status: 429 });
  const { email, password, factory_name, country, industry } = await request.json();
  const eErr = validateEmail(email);
  if (eErr) return Response.json({ error: eErr }, { status: 400 });
  const pErr = validatePassword(password);
  if (pErr) return Response.json({ error: pErr }, { status: 400 });
  if (!factory_name || factory_name.length < 2) return Response.json({ error: "Factory name required" }, { status: 400 });
  const existing = await env2.DB.prepare("SELECT id FROM users WHERE email = ?").bind(email.toLowerCase()).first();
  if (existing) return Response.json({ error: "Email already registered" }, { status: 409 });
  const tenantId = "t_" + randomHex(8);
  const userId = "u_" + randomHex(8);
  const salt = randomSalt();
  const hash = await hashPassword(password, salt);
  const verifyToken = randomHex(24);
  await env2.DB.prepare(
    "INSERT INTO tenants (id, name, api_key_hash) VALUES (?, ?, ?)"
  ).bind(tenantId, factory_name, "pending").run();
  await env2.DB.prepare(
    "UPDATE tenants SET factory_name = ?, country = ?, industry = ?, onboarded = 0 WHERE id = ?"
  ).bind(factory_name, country || null, industry || null, tenantId).run();
  await env2.DB.prepare(
    "INSERT INTO users (id, tenant_id, email, password_hash, salt, role, email_verified, verify_token) VALUES (?, ?, ?, ?, ?, 'owner', 0, ?)"
  ).bind(userId, tenantId, email.toLowerCase(), hash, salt, verifyToken).run();
  await logAuth(env2, "signup", { userId, tenantId, ip: ip2(request), ua: ua2(request) });
  const origin = new URL(request.url).origin;
  const verifyUrl = origin + "/verify?token=" + verifyToken;
  const mail = await sendVerifyEmail(env2, { to: email.toLowerCase(), factoryName: factory_name, verifyUrl });
  await logAuth(env2, "verify_email_sent", { userId, tenantId, ip: ip2(request), ua: ua2(request), meta: { ok: mail.ok } });
  return Response.json({
    ok: true,
    message: "Account created. Check your email to verify.",
    email_sent: mail.ok
  }, { status: 201 });
}
__name(handleSignup, "handleSignup");
async function handleVerify(request, env2) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (!token) return Response.json({ error: "Token required" }, { status: 400 });
  const user = await env2.DB.prepare("SELECT id, tenant_id FROM users WHERE verify_token = ?").bind(token).first();
  if (!user) return Response.json({ error: "Invalid token" }, { status: 400 });
  await env2.DB.prepare("UPDATE users SET email_verified = 1, verify_token = NULL WHERE id = ?").bind(user.id).run();
  await logAuth(env2, "email_verified", { userId: user.id, tenantId: user.tenant_id, ip: ip2(request), ua: ua2(request) });
  return Response.json({ ok: true, message: "Email verified. You can log in now." });
}
__name(handleVerify, "handleVerify");
async function handleLogin(request, env2) {
  const rate = await checkRateLimit(env2, `login:${ip2(request)}`, 5, 900);
  if (!rate.ok) return Response.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  const { email, password } = await request.json();
  if (!email || !password) return Response.json({ error: "Email and password required" }, { status: 400 });
  const user = await env2.DB.prepare(
    "SELECT id, tenant_id, email, password_hash, salt, role, email_verified, failed_attempts, locked_until, totp_enabled FROM users WHERE email = ?"
  ).bind(email.toLowerCase()).first();
  const genericError = Response.json({ error: "Invalid credentials" }, { status: 401 });
  if (!user) {
    await logAuth(env2, "login_failed", { ip: ip2(request), ua: ua2(request), meta: { email } });
    return genericError;
  }
  const now = Math.floor(Date.now() / 1e3);
  if (user.locked_until && user.locked_until > now) {
    await logAuth(env2, "login_locked", { userId: user.id, tenantId: user.tenant_id, ip: ip2(request), ua: ua2(request) });
    return Response.json({ error: "Account locked. Try again later." }, { status: 423 });
  }
  const ok = await verifyPassword(password, user.salt, user.password_hash);
  if (!ok) {
    const attempts = (user.failed_attempts || 0) + 1;
    const lockedUntil = attempts >= 10 ? now + 3600 : null;
    await env2.DB.prepare("UPDATE users SET failed_attempts = ?, locked_until = ? WHERE id = ?").bind(attempts, lockedUntil, user.id).run();
    await logAuth(env2, "login_failed", { userId: user.id, tenantId: user.tenant_id, ip: ip2(request), ua: ua2(request) });
    return genericError;
  }
  if (!user.email_verified) {
    await logAuth(env2, "login_unverified", { userId: user.id, tenantId: user.tenant_id, ip: ip2(request), ua: ua2(request) });
    return Response.json({ error: "Email not verified" }, { status: 403 });
  }
  if (user.totp_enabled === 1) {
    const { totp } = await request.json().catch(() => ({}));
    if (!totp) {
      return Response.json({ ok: false, requires_2fa: true }, { status: 200 });
    }
    const valid = await verify2FAChallenge(env2, user.id, totp);
    if (!valid) {
      await logAuth(env2, "2fa_failed", { userId: user.id, tenantId: user.tenant_id, ip: ip2(request), ua: ua2(request) });
      return Response.json({ error: "Invalid 2FA code", requires_2fa: true }, { status: 401 });
    }
  }
  await env2.DB.prepare("UPDATE users SET failed_attempts = 0, locked_until = NULL WHERE id = ?").bind(user.id).run();
  const sess = await createSession(env2, user.id, user.tenant_id, request);
  await logAuth(env2, "login", { userId: user.id, tenantId: user.tenant_id, ip: ip2(request), ua: ua2(request) });
  const res = Response.json({
    ok: true,
    user: { email: user.email, role: user.role, tenant_id: user.tenant_id },
    csrf_token: sess.csrf
  });
  res.headers.set("Set-Cookie", sess.cookie);
  return res;
}
__name(handleLogin, "handleLogin");
async function handleLogout(request, env2) {
  const session = await getSession(env2, request);
  if (session) {
    await destroySession(env2, session.sessionId);
    await logAuth(env2, "logout", { userId: session.userId, tenantId: session.tenantId, ip: ip2(request), ua: ua2(request) });
  }
  const res = Response.json({ ok: true });
  res.headers.set("Set-Cookie", clearCookie());
  return res;
}
__name(handleLogout, "handleLogout");
async function handleMe(request, env2, session) {
  const tenant = await env2.DB.prepare(
    "SELECT id, name, factory_name, country, industry, default_protocol, onboarded, created_at FROM tenants WHERE id = ?"
  ).bind(session.tenantId).first();
  return Response.json({
    user: { email: session.email, role: session.role, tenant_id: session.tenantId },
    tenant: tenant || null,
    csrf_token: session.csrfToken
  });
}
__name(handleMe, "handleMe");

// src/api/machines.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
init_password();

// src/api/billing.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ip3(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip3, "ip");
function ua3(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua3, "ua");
async function handlePlans(request, env2, session) {
  const rows = await env2.DB.prepare("SELECT id, name, price_monthly, max_machines, max_users, features FROM plans ORDER BY price_monthly").all();
  return Response.json({ plans: rows.results || [] });
}
__name(handlePlans, "handlePlans");
async function handleCurrentPlan(request, env2, session) {
  const t = await env2.DB.prepare(
    "SELECT plan_id, trial_ends_at, stripe_customer_id, stripe_subscription_id FROM tenants WHERE id = ?"
  ).bind(session.tenantId).first();
  const planId = t && t.plan_id || "free";
  const plan = await env2.DB.prepare("SELECT * FROM plans WHERE id = ?").bind(planId).first();
  const [machineCount, userCount] = await Promise.all([
    env2.DB.prepare("SELECT COUNT(*) as n FROM machines WHERE tenant_id = ?").bind(session.tenantId).first(),
    env2.DB.prepare("SELECT COUNT(*) as n FROM users WHERE tenant_id = ?").bind(session.tenantId).first()
  ]);
  return Response.json({
    plan,
    usage: {
      machines: machineCount?.n ?? 0,
      users: userCount?.n ?? 0
    },
    trial_ends_at: t ? t.trial_ends_at : null,
    has_stripe: !!(t && t.stripe_customer_id)
  });
}
__name(handleCurrentPlan, "handleCurrentPlan");
async function handleSelectPlan(request, env2, session) {
  if (session.role !== "owner") return Response.json({ error: "Owner only" }, { status: 403 });
  const { plan_id } = await request.json();
  const plan = await env2.DB.prepare("SELECT * FROM plans WHERE id = ?").bind(plan_id).first();
  if (!plan) return Response.json({ error: "Invalid plan" }, { status: 400 });
  await env2.DB.prepare("UPDATE tenants SET plan_id = ? WHERE id = ?").bind(plan_id, session.tenantId).run();
  await logAuth(env2, "plan_changed", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip3(request),
    ua: ua3(request),
    meta: { plan_id }
  });
  return Response.json({ ok: true, plan });
}
__name(handleSelectPlan, "handleSelectPlan");
async function checkPlanLimit(env2, tenantId, resource) {
  const t = await env2.DB.prepare("SELECT plan_id FROM tenants WHERE id = ?").bind(tenantId).first();
  const planId = t && t.plan_id || "free";
  const plan = await env2.DB.prepare("SELECT * FROM plans WHERE id = ?").bind(planId).first();
  if (!plan) return { ok: true };
  if (resource === "machine") {
    const c = await env2.DB.prepare("SELECT COUNT(*) as n FROM machines WHERE tenant_id = ?").bind(tenantId).first();
    if ((c?.n ?? 0) >= plan.max_machines) {
      return { ok: false, error: "Plan limit reached: " + plan.max_machines + " machines", plan: planId };
    }
  }
  if (resource === "user") {
    const c = await env2.DB.prepare("SELECT COUNT(*) as n FROM users WHERE tenant_id = ?").bind(tenantId).first();
    if ((c?.n ?? 0) >= plan.max_users) {
      return { ok: false, error: "Plan limit reached: " + plan.max_users + " users", plan: planId };
    }
  }
  return { ok: true };
}
__name(checkPlanLimit, "checkPlanLimit");
async function handleStripeCheckout(request, env2, session) {
  if (session.role !== "owner") return Response.json({ error: "Owner only" }, { status: 403 });
  const { plan_id } = await request.json();
  const plan = await env2.DB.prepare("SELECT * FROM plans WHERE id = ?").bind(plan_id).first();
  if (!plan) return Response.json({ error: "Invalid plan" }, { status: 400 });
  const stripeKey = env2.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return Response.json({
      ok: true,
      mock: true,
      message: "Stripe not configured. Plan selected in mock mode.",
      plan_id
    });
  }
  const origin = new URL(request.url).origin;
  const params = new URLSearchParams();
  params.append("mode", "subscription");
  params.append("success_url", origin + "/dashboard?billing=success");
  params.append("cancel_url", origin + "/dashboard?billing=cancel");
  params.append("client_reference_id", session.tenantId);
  params.append("customer_email", session.email);
  params.append("metadata[tenant_id]", session.tenantId);
  params.append("metadata[plan_id]", plan_id);
  const priceMap = env2.STRIPE_PRICE_MAP ? JSON.parse(env2.STRIPE_PRICE_MAP) : {};
  if (!priceMap[plan_id]) {
    return Response.json({ error: "No Stripe price configured for " + plan_id }, { status: 400 });
  }
  params.append("line_items[0][price]", priceMap[plan_id]);
  params.append("line_items[0][quantity]", "1");
  const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + stripeKey,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  });
  const j = await r.json();
  if (!r.ok) return Response.json({ error: "Stripe error", detail: j }, { status: 500 });
  await logAuth(env2, "stripe_checkout_started", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip3(request),
    ua: ua3(request),
    meta: { plan_id, session_id: j.id }
  });
  return Response.json({ ok: true, url: j.url, session_id: j.id });
}
__name(handleStripeCheckout, "handleStripeCheckout");
async function handleStripeWebhook(request, env2) {
  const sig = request.headers.get("Stripe-Signature");
  const body = await request.text();
  if (!sig) return Response.json({ error: "No signature" }, { status: 400 });
  let event;
  try {
    event = JSON.parse(body);
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (event.type === "checkout.session.completed") {
    const s = event.data.object;
    const tenantId = s.metadata && s.metadata.tenant_id;
    const planId = s.metadata && s.metadata.plan_id;
    if (tenantId && planId) {
      await env2.DB.prepare(
        "UPDATE tenants SET plan_id = ?, stripe_customer_id = ?, stripe_subscription_id = ? WHERE id = ?"
      ).bind(planId, s.customer || null, s.subscription || null, tenantId).run();
    }
  }
  if (event.type === "customer.subscription.deleted") {
    const s = event.data.object;
    await env2.DB.prepare(
      "UPDATE tenants SET plan_id = 'free', stripe_subscription_id = NULL WHERE stripe_customer_id = ?"
    ).bind(s.customer).run();
  }
  return Response.json({ received: true });
}
__name(handleStripeWebhook, "handleStripeWebhook");

// src/api/machines.js
function ip4(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip4, "ip");
function ua4(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua4, "ua");
async function handleMachinesList(request, env2, session) {
  const rows = await env2.DB.prepare(
    "SELECT id, name, brand, model, protocol, serial, status, created_at FROM machines WHERE tenant_id = ? ORDER BY created_at DESC"
  ).bind(session.tenantId).all();
  return Response.json({ machines: rows.results || [] });
}
__name(handleMachinesList, "handleMachinesList");
async function handleMachineCreate(request, env2, session) {
  const body = await request.json();
  const { name, brand, model, protocol, serial } = body;
  if (!name || name.length < 2) return Response.json({ error: "Machine name required" }, { status: 400 });
  const limit = await checkPlanLimit(env2, session.tenantId, "machine");
  if (!limit.ok) return Response.json({ error: limit.error, plan: limit.plan }, { status: 402 });
  const id = "m_" + randomHex(8);
  await env2.DB.prepare(
    "INSERT INTO machines (id, tenant_id, name, brand, model, protocol, serial, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'offline')"
  ).bind(id, session.tenantId, name, brand || null, model || null, protocol || null, serial || null).run();
  await logAuth(env2, "machine_created", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip4(request),
    ua: ua4(request),
    meta: { machine_id: id, name }
  });
  return Response.json({ ok: true, machine: { id, name, brand, model, protocol, serial, status: "offline" } }, { status: 201 });
}
__name(handleMachineCreate, "handleMachineCreate");
async function handleMachineDelete(request, env2, session, machineId) {
  const row = await env2.DB.prepare(
    "SELECT id FROM machines WHERE id = ? AND tenant_id = ?"
  ).bind(machineId, session.tenantId).first();
  if (!row) return Response.json({ error: "Not found" }, { status: 404 });
  await env2.DB.prepare("DELETE FROM machines WHERE id = ? AND tenant_id = ?").bind(machineId, session.tenantId).run();
  await logAuth(env2, "machine_deleted", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip4(request),
    ua: ua4(request),
    meta: { machine_id: machineId }
  });
  return Response.json({ ok: true });
}
__name(handleMachineDelete, "handleMachineDelete");

// src/api/apikeys.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
init_password();
function ip5(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip5, "ip");
function ua5(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua5, "ua");
async function handleApiKeyList(request, env2, session) {
  const rows = await env2.DB.prepare(
    "SELECT id, name, scope, last_used, revoked, created_at FROM api_keys WHERE tenant_id = ? ORDER BY created_at DESC"
  ).bind(session.tenantId).all();
  return Response.json({ keys: rows.results || [] });
}
__name(handleApiKeyList, "handleApiKeyList");
async function handleApiKeyCreate(request, env2, session) {
  const { name, scope } = await request.json();
  if (!name || name.length < 2) return Response.json({ error: "Name required" }, { status: 400 });
  const allowedScopes = ["ingest:write", "ingest:read"];
  const finalScope = allowedScopes.includes(scope) ? scope : "ingest:write";
  const raw = "mk_" + randomHex(24);
  const keyHash = await sha256Hex(raw);
  const id = "k_" + randomHex(8);
  await env2.DB.prepare(
    "INSERT INTO api_keys (id, tenant_id, name, key_hash, scope) VALUES (?, ?, ?, ?, ?)"
  ).bind(id, session.tenantId, name, keyHash, finalScope).run();
  await logAuth(env2, "apikey_created", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip5(request),
    ua: ua5(request),
    meta: { key_id: id, name, scope: finalScope }
  });
  return Response.json({
    ok: true,
    key: { id, name, scope: finalScope, key: raw },
    warning: "Store this key now. It will not be shown again."
  }, { status: 201 });
}
__name(handleApiKeyCreate, "handleApiKeyCreate");
async function handleApiKeyRevoke(request, env2, session, keyId) {
  const row = await env2.DB.prepare(
    "SELECT id FROM api_keys WHERE id = ? AND tenant_id = ?"
  ).bind(keyId, session.tenantId).first();
  if (!row) return Response.json({ error: "Not found" }, { status: 404 });
  await env2.DB.prepare("UPDATE api_keys SET revoked = 1 WHERE id = ?").bind(keyId).run();
  await logAuth(env2, "apikey_revoked", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip5(request),
    ua: ua5(request),
    meta: { key_id: keyId }
  });
  return Response.json({ ok: true });
}
__name(handleApiKeyRevoke, "handleApiKeyRevoke");
async function verifyApiKey(env2, rawKey, requiredScope) {
  if (!rawKey || !rawKey.startsWith("mk_")) return null;
  const hash = await sha256Hex(rawKey);
  const row = await env2.DB.prepare(
    "SELECT id, tenant_id, scope, revoked FROM api_keys WHERE key_hash = ?"
  ).bind(hash).first();
  if (!row || row.revoked === 1) return null;
  if (requiredScope && !row.scope.split(":").includes(requiredScope.split(":")[0])) return null;
  await env2.DB.prepare("UPDATE api_keys SET last_used = unixepoch() WHERE id = ?").bind(row.id).run();
  return { keyId: row.id, tenantId: row.tenant_id, scope: row.scope };
}
__name(verifyApiKey, "verifyApiKey");

// src/api/tenants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ip6(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip6, "ip");
function ua6(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua6, "ua");
async function handleTenantMe(request, env2, session) {
  if (request.method === "GET") {
    const t = await env2.DB.prepare(
      "SELECT id, name, factory_name, country, industry, default_protocol, onboarded, onboarded_at, created_at FROM tenants WHERE id = ?"
    ).bind(session.tenantId).first();
    return Response.json({ tenant: t || null });
  }
  if (request.method === "PUT") {
    const body = await request.json();
    const { factory_name, country, industry, default_protocol } = body;
    if (!factory_name || factory_name.length < 2) {
      return Response.json({ error: "Factory name required" }, { status: 400 });
    }
    await env2.DB.prepare(
      "UPDATE tenants SET name = ?, factory_name = ?, country = ?, industry = ?, default_protocol = ? WHERE id = ?"
    ).bind(
      factory_name,
      factory_name,
      country || null,
      industry || null,
      default_protocol || "modbus",
      session.tenantId
    ).run();
    await logAuth(env2, "tenant_updated", {
      userId: session.userId,
      tenantId: session.tenantId,
      ip: ip6(request),
      ua: ua6(request),
      meta: { factory_name, country, industry, default_protocol }
    });
    return Response.json({ ok: true });
  }
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
__name(handleTenantMe, "handleTenantMe");

// src/api/invites.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
init_password();
function ip7(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip7, "ip");
function ua7(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua7, "ua");
var ROLES = ["admin", "viewer"];
async function handleInviteList(request, env2, session) {
  if (session.role !== "owner" && session.role !== "admin") {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
  const rows = await env2.DB.prepare(
    "SELECT id, email, role, expires_at, accepted_at, created_at FROM invites WHERE tenant_id = ? ORDER BY created_at DESC"
  ).bind(session.tenantId).all();
  return Response.json({ invites: rows.results || [] });
}
__name(handleInviteList, "handleInviteList");
async function handleInviteCreate(request, env2, session) {
  if (session.role !== "owner" && session.role !== "admin") {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
  const body = await request.json();
  const email = (body.email || "").toLowerCase();
  const role = ROLES.includes(body.role) ? body.role : "viewer";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }
  const limit = await checkPlanLimit(env2, session.tenantId, "user");
  if (!limit.ok) return Response.json({ error: limit.error, plan: limit.plan }, { status: 402 });
  const existingUser = await env2.DB.prepare(
    "SELECT id FROM users WHERE email = ? AND tenant_id = ?"
  ).bind(email, session.tenantId).first();
  if (existingUser) return Response.json({ error: "User already in tenant" }, { status: 409 });
  const raw = randomHex(24);
  const tokenHash = await sha256Hex(raw);
  const id = "i_" + randomHex(8);
  const expiresAt = Math.floor(Date.now() / 1e3) + 7 * 24 * 3600;
  await env2.DB.prepare(
    "INSERT INTO invites (id, tenant_id, email, role, token_hash, invited_by, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
  ).bind(id, session.tenantId, email, role, tokenHash, session.userId, expiresAt).run();
  const origin = new URL(request.url).origin;
  const inviteUrl = origin + "/accept?token=" + raw;
  const tenant = await env2.DB.prepare("SELECT factory_name FROM tenants WHERE id = ?").bind(session.tenantId).first();
  const mail = await sendInviteEmail(env2, {
    to: email,
    factoryName: tenant && tenant.factory_name || "a BahBorak tenant",
    role,
    inviteUrl
  });
  await logAuth(env2, "invite_created", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip7(request),
    ua: ua7(request),
    meta: { invite_id: id, email, role, email_sent: mail.ok }
  });
  return Response.json({ ok: true, invite: { id, email, role, expires_at: expiresAt }, email_sent: mail.ok }, { status: 201 });
}
__name(handleInviteCreate, "handleInviteCreate");
async function handleInviteRevoke(request, env2, session, inviteId) {
  if (session.role !== "owner" && session.role !== "admin") {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
  const row = await env2.DB.prepare(
    "SELECT id FROM invites WHERE id = ? AND tenant_id = ?"
  ).bind(inviteId, session.tenantId).first();
  if (!row) return Response.json({ error: "Not found" }, { status: 404 });
  await env2.DB.prepare("DELETE FROM invites WHERE id = ? AND tenant_id = ?").bind(inviteId, session.tenantId).run();
  await logAuth(env2, "invite_revoked", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip7(request),
    ua: ua7(request),
    meta: { invite_id: inviteId }
  });
  return Response.json({ ok: true });
}
__name(handleInviteRevoke, "handleInviteRevoke");
async function handleInviteAccept(request, env2) {
  const body = await request.json();
  const { token, password } = body;
  if (!token || !password) return Response.json({ error: "Token and password required" }, { status: 400 });
  const { validatePassword: validatePassword2, hashPassword: hashPassword2, randomSalt: randomSalt2 } = await Promise.resolve().then(() => (init_password(), password_exports));
  const pErr = validatePassword2(password);
  if (pErr) return Response.json({ error: pErr }, { status: 400 });
  const tokenHash = await sha256Hex(token);
  const now = Math.floor(Date.now() / 1e3);
  const invite = await env2.DB.prepare(
    "SELECT id, tenant_id, email, role, expires_at, accepted_at FROM invites WHERE token_hash = ?"
  ).bind(tokenHash).first();
  if (!invite) return Response.json({ error: "Invalid invite" }, { status: 400 });
  if (invite.accepted_at) return Response.json({ error: "Already accepted" }, { status: 400 });
  if (invite.expires_at < now) return Response.json({ error: "Invite expired" }, { status: 400 });
  const existing = await env2.DB.prepare("SELECT id FROM users WHERE email = ?").bind(invite.email).first();
  if (existing) return Response.json({ error: "Email already registered" }, { status: 409 });
  const salt = randomSalt2();
  const hash = await hashPassword2(password, salt);
  const userId = "u_" + randomHex(8);
  await env2.DB.prepare(
    "INSERT INTO users (id, tenant_id, email, password_hash, salt, role, email_verified) VALUES (?, ?, ?, ?, ?, ?, 1)"
  ).bind(userId, invite.tenant_id, invite.email, hash, salt, invite.role).run();
  await env2.DB.prepare("UPDATE invites SET accepted_at = ? WHERE id = ?").bind(now, invite.id).run();
  await logAuth(env2, "invite_accepted", {
    userId,
    tenantId: invite.tenant_id,
    ip: ip7(request),
    ua: ua7(request),
    meta: { invite_id: invite.id, role: invite.role }
  });
  return Response.json({ ok: true, message: "Account created. You can log in now." });
}
__name(handleInviteAccept, "handleInviteAccept");

// src/api/templates.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
init_password();
function ip8(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip8, "ip");
function ua8(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua8, "ua");
async function handleTemplatesList(request, env2) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const q = category ? env2.DB.prepare("SELECT id, name, category, description, config, installs, author FROM rule_templates WHERE category = ? ORDER BY installs DESC").bind(category) : env2.DB.prepare("SELECT id, name, category, description, config, installs, author FROM rule_templates ORDER BY installs DESC");
  const rows = await q.all();
  return Response.json({ templates: rows.results || [] });
}
__name(handleTemplatesList, "handleTemplatesList");
async function handleTemplateInstall(request, env2, session, templateId) {
  const tpl = await env2.DB.prepare(
    "SELECT id, name, config FROM rule_templates WHERE id = ?"
  ).bind(templateId).first();
  if (!tpl) return Response.json({ error: "Template not found" }, { status: 404 });
  const ruleId = "r_" + randomHex(8);
  await env2.DB.prepare(
    "INSERT INTO rules (id, tenant_id, name, config, enabled) VALUES (?, ?, ?, ?, 1)"
  ).bind(ruleId, session.tenantId, tpl.name, tpl.config).run();
  await env2.DB.prepare(
    "UPDATE rule_templates SET installs = installs + 1 WHERE id = ?"
  ).bind(templateId).run();
  await logAuth(env2, "template_installed", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip8(request),
    ua: ua8(request),
    meta: { template_id: templateId, rule_id: ruleId }
  });
  return Response.json({ ok: true, rule_id: ruleId }, { status: 201 });
}
__name(handleTemplateInstall, "handleTemplateInstall");

// src/api/rules.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
init_password();
function ip9(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}
__name(ip9, "ip");
function ua9(request) {
  return request.headers.get("User-Agent") || "unknown";
}
__name(ua9, "ua");
async function handleRulesList(request, env2, session) {
  const rows = await env2.DB.prepare(
    "SELECT id, name, config, enabled, created_at FROM rules WHERE tenant_id = ? ORDER BY created_at DESC"
  ).bind(session.tenantId).all();
  return Response.json({ rules: rows.results || [] });
}
__name(handleRulesList, "handleRulesList");
async function handleRuleCreate(request, env2, session) {
  const body = await request.json();
  const { name, metric, operator, threshold, action, action_value, severity } = body;
  if (!name || name.length < 2) return Response.json({ error: "Name required" }, { status: 400 });
  if (!metric) return Response.json({ error: "Metric required" }, { status: 400 });
  if (!operator) return Response.json({ error: "Operator required" }, { status: 400 });
  if (threshold === void 0 || threshold === null) return Response.json({ error: "Threshold required" }, { status: 400 });
  const validOps = ["gt", "gte", "lt", "lte", "eq", "neq"];
  if (!validOps.includes(operator)) return Response.json({ error: "Invalid operator" }, { status: 400 });
  const validMetrics = ["temp", "rpm", "power"];
  if (!validMetrics.includes(metric)) return Response.json({ error: "Invalid metric" }, { status: 400 });
  const validActions = ["alert", "command", "clear"];
  const act = validActions.includes(action) ? action : "alert";
  const sev = ["info", "warning", "critical"].includes(severity) ? severity : "warning";
  const id = "r_" + randomHex(8);
  const config2 = JSON.stringify({ metric, operator, threshold: Number(threshold), action: act, action_value: action_value ?? null, severity: sev });
  await env2.DB.prepare(
    "INSERT INTO rules (id, tenant_id, name, config, enabled) VALUES (?, ?, ?, ?, 1)"
  ).bind(id, session.tenantId, name, config2).run();
  await logAuth(env2, "rule_created", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip9(request),
    ua: ua9(request),
    meta: { rule_id: id, name }
  });
  return Response.json({ ok: true, rule: { id, name, config: JSON.parse(config2), enabled: 1 } }, { status: 201 });
}
__name(handleRuleCreate, "handleRuleCreate");
async function handleRuleUpdate(request, env2, session, ruleId) {
  const row = await env2.DB.prepare(
    "SELECT id FROM rules WHERE id = ? AND tenant_id = ?"
  ).bind(ruleId, session.tenantId).first();
  if (!row) return Response.json({ error: "Not found" }, { status: 404 });
  const body = await request.json();
  if (typeof body.enabled === "boolean") {
    await env2.DB.prepare("UPDATE rules SET enabled = ? WHERE id = ?").bind(body.enabled ? 1 : 0, ruleId).run();
  }
  await logAuth(env2, "rule_updated", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip9(request),
    ua: ua9(request),
    meta: { rule_id: ruleId }
  });
  return Response.json({ ok: true });
}
__name(handleRuleUpdate, "handleRuleUpdate");
async function handleRuleDelete(request, env2, session, ruleId) {
  const row = await env2.DB.prepare(
    "SELECT id FROM rules WHERE id = ? AND tenant_id = ?"
  ).bind(ruleId, session.tenantId).first();
  if (!row) return Response.json({ error: "Not found" }, { status: 404 });
  await env2.DB.prepare("DELETE FROM rules WHERE id = ? AND tenant_id = ?").bind(ruleId, session.tenantId).run();
  await logAuth(env2, "rule_deleted", {
    userId: session.userId,
    tenantId: session.tenantId,
    ip: ip9(request),
    ua: ua9(request),
    meta: { rule_id: ruleId }
  });
  return Response.json({ ok: true });
}
__name(handleRuleDelete, "handleRuleDelete");

// src/auth/middleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function requireAuth(env2, request) {
  const session = await getSession(env2, request);
  if (!session) {
    return { error: Response.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  if (!session.emailVerified) {
    return { error: Response.json({ error: "Email not verified" }, { status: 403 }) };
  }
  return { session };
}
__name(requireAuth, "requireAuth");
async function requireCSRF(env2, request, session) {
  if (["GET", "HEAD", "OPTIONS"].includes(request.method)) return { ok: true };
  const header = request.headers.get("X-CSRF-Token");
  if (!header || header !== session.csrfToken) {
    return { error: Response.json({ error: "Invalid CSRF token" }, { status: 403 }) };
  }
  return { ok: true };
}
__name(requireCSRF, "requireCSRF");
function securityHeaders(res) {
  const h = new Headers(res.headers);
  h.set("X-Content-Type-Options", "nosniff");
  h.set("X-Frame-Options", "DENY");
  h.set("Referrer-Policy", "strict-origin-when-cross-origin");
  h.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  h.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  h.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'");
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
}
__name(securityHeaders, "securityHeaders");

// src/web/landing.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var LANDING_HTML = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>BahBorak \u2014 WhatsApp Automation for Malaysian Business</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script>
tailwind.config = { darkMode: 'class', theme: { extend: {
  colors: { ink: { 950:'#0a0a0a', 900:'#111111', 800:'#1a1a1a', 700:'#262626', 600:'#404040' } }
}}}
<\/script>
<style>
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; }
  .grid-bg {
    background-image: linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
    background-size: 48px 48px;
  }
</style>
</head>
<body class="bg-ink-950 text-neutral-200 font-sans">

<header class="fixed top-0 inset-x-0 z-50 border-b border-white/5 backdrop-blur-xl bg-ink-950/70">
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="font-mono text-sm tracking-[0.3em] uppercase text-neutral-300">BahBorak</a>
    <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-500">
      <a href="#features" class="hover:text-neutral-100 transition">Features</a>
      <a href="#pricing" class="hover:text-neutral-100 transition">Pricing</a>
      <a href="#ask-bot" class="hover:text-neutral-100 transition">Ask Bot</a>
    </nav>
    <div class="flex items-center gap-3">
      <a href="/login" class="text-sm text-neutral-400 hover:text-neutral-100 transition">Login</a>
      <a href="/signup" class="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition">Get started</a>
    </div>
  </div>
</header>

<section class="relative pt-40 pb-32 grid-bg border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 border border-white/10 rounded-full px-4 py-1.5 mb-8">
      <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
      Built for Malaysian SMEs
    </div>
    <h1 class="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mb-8">
      Your WhatsApp. <span class="text-neutral-500">Automated.</span>
    </h1>
    <p class="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
      BahBorak handles customer questions on WhatsApp \u2014 order status, pricing, hours, bookings. Set your rules. Bot replies. You approve what matters.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <a href="/signup" class="px-6 py-3.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition">Start free</a>
      <a href="#ask-bot" class="px-6 py-3.5 rounded-lg border border-white/10 text-sm hover:border-white/25 transition">Ask Bot</a>
    </div>
  </div>
</section>

<section id="features" class="py-28 border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-4">Features</div>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mb-16">
      Rules control. Bot advises. You decide.
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">01</div>
        <h3 class="font-semibold mb-2">Auto-Reply</h3>
        <p class="text-sm text-neutral-500">Answer common questions instantly. Pricing, hours, order status, bookings.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">02</div>
        <h3 class="font-semibold mb-2">Rule Engine</h3>
        <p class="text-sm text-neutral-500">Deterministic replies. No black box. Every reply has a reason.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">03</div>
        <h3 class="font-semibold mb-2">Bot Assistant</h3>
        <p class="text-sm text-neutral-500">AI suggests replies for tricky questions. You approve before send.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">04</div>
        <h3 class="font-semibold mb-2">Multi-Business</h3>
        <p class="text-sm text-neutral-500">Manage multiple shops or brands. Isolated data per business.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">05</div>
        <h3 class="font-semibold mb-2">Audit Log</h3>
        <p class="text-sm text-neutral-500">Every reply logged. Every action traceable. Full history.</p>
      </div>
      <div class="bg-ink-950 p-8">
        <div class="font-mono text-xs text-neutral-600 mb-6">06</div>
        <h3 class="font-semibold mb-2">Team Access</h3>
        <p class="text-sm text-neutral-500">Invite staff with roles \u2014 owner, admin, agent. Control who replies.</p>
      </div>
    </div>
  </div>
</section>

<section id="pricing" class="py-28 border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-4">Pricing</div>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mb-16">
      Plans that fit Malaysian SMEs.
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-6 rounded-xl bg-ink-900 border border-white/5">
        <div class="font-semibold text-lg mb-1">Free</div>
        <div class="text-3xl font-bold mb-4">RM0</div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>100 messages/mo</li>
          <li>1 user</li>
          <li>Basic rules</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg border border-white/10 text-sm hover:border-white/25">Start</a>
      </div>
      <div class="p-6 rounded-xl bg-ink-900 border border-white/5">
        <div class="font-semibold text-lg mb-1">Starter</div>
        <div class="text-3xl font-bold mb-4">RM49<span class="text-sm text-neutral-500 font-normal">/mo</span></div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>1,000 messages/mo</li>
          <li>3 users</li>
          <li>Rule marketplace</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg border border-white/10 text-sm hover:border-white/25">Choose</a>
      </div>
      <div class="p-6 rounded-xl bg-ink-900 border-2 border-white/30 relative">
        <div class="absolute top-3 right-3 text-xs font-mono text-green-400">POPULAR</div>
        <div class="font-semibold text-lg mb-1">Growth</div>
        <div class="text-3xl font-bold mb-4">RM199<span class="text-sm text-neutral-500 font-normal">/mo</span></div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>10,000 messages/mo</li>
          <li>10 users</li>
          <li>AI assistant (Bot)</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200">Choose</a>
      </div>
      <div class="p-6 rounded-xl bg-ink-900 border border-white/5">
        <div class="font-semibold text-lg mb-1">Business</div>
        <div class="text-3xl font-bold mb-4">RM499<span class="text-sm text-neutral-500 font-normal">/mo</span></div>
        <ul class="text-sm text-neutral-500 space-y-2 mb-6">
          <li>Unlimited messages</li>
          <li>25 users</li>
          <li>Priority support</li>
        </ul>
        <a href="/signup" class="block text-center py-2 rounded-lg border border-white/10 text-sm hover:border-white/25">Choose</a>
      </div>
    </div>
  </div>
</section>

<section id="ask-bot" class="py-28 border-b border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-4">Ask Bot</div>
    <h2 class="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mb-4">Questions? Ask Bot.</h2>
    <p class="text-neutral-500 mb-10 max-w-xl">Bot knows BahBorak. Features, pricing, how it works. Ask anything.</p>

    <div id="bot-panel" style="display:flex;width:100%;max-width:640px;height:520px;background:#141414;border:1px solid #262626;border-radius:16px;flex-direction:column;overflow:hidden;">
      <div style="padding:14px 16px;border-bottom:1px solid #262626;display:flex;align-items:center;gap:8px;">
        <div style="font-weight:600;font-size:14px;">Bot</div>
        <div style="font-size:11px;color:#737373;margin-left:auto;font-family:ui-monospace,monospace;">bahborak assistant</div>
      </div>
      <div id="bot-msgs" style="flex:1;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px;">
        <div style="background:#1a1a1a;border:1px solid #262626;border-radius:10px;padding:10px 13px;font-size:13px;color:#d4d4d4;line-height:1.5;max-width:90%;">Hi. I can explain BahBorak \u2014 features, pricing, how it works. Ask me anything.</div>
      </div>
      <form id="bot-form" style="padding:12px;border-top:1px solid #262626;display:flex;gap:8px;">
        <input id="bot-input" type="text" placeholder="Ask about BahBorak..." autocomplete="off" required style="flex:1;padding:10px 12px;background:#0a0a0a;border:1px solid #262626;border-radius:8px;color:#e5e5e5;font-size:13px;outline:none;">
        <button type="submit" id="bot-send" style="padding:10px 14px;background:#e5e5e5;color:#0a0a0a;border:none;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;">Send</button>
      </form>
    </div>
  </div>
</section>

<footer class="py-16">
  <div class="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-sm text-neutral-600">
    <div class="font-mono tracking-widest">BAHBORAK \xB7 2026</div>
    <div class="flex items-center gap-6">
      <a href="/login" class="hover:text-neutral-300 transition">Login</a>
      <a href="/signup" class="hover:text-neutral-300 transition">Sign up</a>
      <a href="https://github.com/vmojuga-pixel/BahBorak" class="hover:text-neutral-300 transition">GitHub</a>
    </div>
  </div>
</footer>

<script>
(function(){
  const form = document.getElementById("bot-form");
  const input = document.getElementById("bot-input");
  const msgs = document.getElementById("bot-msgs");
  const send = document.getElementById("bot-send");
  let history = [];

  function add(text, who){
    const d = document.createElement("div");
    const base = "border-radius:10px;padding:10px 13px;font-size:13px;line-height:1.5;max-width:90%;white-space:pre-wrap;";
    d.style.cssText = base + (who === "user"
      ? "background:#1d4ed8;color:#fff;align-self:flex-end;"
      : "background:#1a1a1a;border:1px solid #262626;color:#d4d4d4;align-self:flex-start;");
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    add(text, "user");
    input.value = "";
    send.disabled = true;
    const loading = add("...", "bot");
    try {
      const r = await fetch("/api/bot/public", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history })
      });
      const j = await r.json();
      loading.textContent = j.reply || j.error || "No reply.";
      history.push({ role: "user", content: text });
      history.push({ role: "assistant", content: loading.textContent });
      history = history.slice(-6);
    } catch (err) {
      loading.textContent = "Error: " + err.message;
    } finally {
      send.disabled = false;
      input.focus();
    }
  });
})();
<\/script>

</body>
</html>`;

// src/web/dashboard.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var DASHBOARD_HTML = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>BahBorak \u2014 Dashboard</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script>
tailwind.config = {
  darkMode: 'class',
  theme: { extend: {
    colors: { ink: { 950:'#0a0a0a', 900:'#111111', 800:'#1a1a1a', 700:'#262626', 600:'#404040' } }
  }}
}
<\/script>
<style>
  body { -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { background: #262626; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #404040; }
</style>
</head>
<body class="bg-ink-950 text-neutral-200 font-sans h-screen flex flex-col overflow-hidden">

<header class="border-b border-white/5 px-6 h-14 flex items-center gap-4 flex-shrink-0">
  <a href="/" class="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400 hover:text-neutral-100">BahBorak</a>
  <span class="font-mono text-xs text-neutral-500 border border-white/10 rounded px-2 py-1" id="tenant-label">...</span>
  <button id="billing-btn" class="text-xs px-3 py-1.5 border border-white/10 rounded-md text-neutral-300 hover:border-white/25 transition">Plan</button>
  <button id="invites-btn" class="text-xs px-3 py-1.5 border border-white/10 rounded-md text-neutral-300 hover:border-white/25 transition">Team</button>
  <button id="2fa-btn" class="text-xs px-3 py-1.5 border border-white/10 rounded-md text-neutral-300 hover:border-white/25 transition">2FA</button>
  <button id="rules-btn" class="ml-auto text-xs px-3 py-1.5 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition">Rules</button>
  <button id="logout-btn" class="text-xs text-neutral-500 hover:text-red-400 transition">Logout</button>
  <div class="flex items-center gap-2 text-xs text-green-500">
    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
    <span id="status-label">Live</span>
  </div>
</header>

<main class="flex-1 overflow-y-auto lg:grid lg:grid-cols-12 lg:overflow-hidden">

  <!-- LEFT SIDEBAR -->
  <aside class="p-5 border-b lg:border-b-0 lg:border-r border-white/5 lg:col-span-3 lg:overflow-y-auto">
    <div class="text-xs font-mono tracking-[0.2em] uppercase text-neutral-600 mb-3">Overview</div>
    <div class="space-y-2 mb-8">
      <div class="p-3.5 rounded-lg bg-ink-900 border border-white/5">
        <div class="text-xs text-neutral-500 mb-1">Machines</div>
        <div class="text-2xl font-semibold" id="s-machines">\u2014</div>
      </div>
      <div class="p-3.5 rounded-lg bg-ink-900 border border-white/5">
        <div class="text-xs text-neutral-500 mb-1">Open alerts</div>
        <div class="text-2xl font-semibold" id="s-alerts">\u2014</div>
      </div>
      <div class="p-3.5 rounded-lg bg-ink-900 border border-white/5">
        <div class="text-xs text-neutral-500 mb-1">Commands 24h</div>
        <div class="text-2xl font-semibold" id="s-commands">\u2014</div>
      </div>
    </div>
    <div class="flex items-center justify-between mb-3 mt-6">
      <div class="text-xs font-mono tracking-[0.2em] uppercase text-neutral-600">API Keys</div>
      <button id="add-key-btn" class="text-xs px-2.5 py-1 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition">+ Key</button>
    </div>
    <div id="keys-list" class="space-y-2 mb-8">
      <div class="text-xs text-neutral-600 text-center py-4">No keys</div>
    </div>
    <div class="text-xs font-mono tracking-[0.2em] uppercase text-neutral-600 mb-3">Recent alerts</div>
    <div id="alerts-list" class="space-y-2">
      <div class="text-xs text-neutral-600 text-center py-6">No alerts</div>
    </div>
  </aside>

  <!-- CENTER -->
  <section class="p-5 border-b lg:border-b-0 border-white/5 lg:col-span-6 lg:overflow-y-auto">
    <div class="flex items-center justify-between mb-3"><div class="text-xs font-mono tracking-[0.2em] uppercase text-neutral-600">Machines</div><button id="add-machine-btn" class="text-xs px-3 py-1.5 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition">+ Add</button></div>
    <div class="rounded-lg border border-white/5 overflow-x-auto">
      <table class="w-full text-sm min-w-[520px]">
        <thead>
          <tr class="bg-ink-900 text-xs font-mono uppercase tracking-wider text-neutral-600">
            <th class="text-left px-4 py-2.5 font-normal">Machine</th>
            <th class="text-left px-4 py-2.5 font-normal">Status</th>
            <th class="text-right px-4 py-2.5 font-normal">Temp</th>
            <th class="text-right px-4 py-2.5 font-normal">RPM</th>
            <th class="text-right px-4 py-2.5 font-normal">Power</th>
          </tr>
        </thead>
        <tbody id="machines-body">
          <tr><td colspan="5" class="text-xs text-neutral-600 text-center py-12">No data</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- RIGHT: MERI -->
  <aside class="lg:col-span-3 lg:border-l border-white/5 flex flex-col h-[70vh] lg:h-auto lg:overflow-hidden">
    <div class="px-4 py-3 border-b border-white/5 flex items-center gap-2">
      <span class="font-semibold text-sm">Bot</span>
      <span class="ml-auto text-xs font-mono text-neutral-600">advisor</span>
    </div>
    <div id="bot-chat" class="flex-1 overflow-y-auto p-4 space-y-3">
      <div class="text-sm bg-ink-900 border border-white/5 rounded-lg p-3 text-neutral-400 leading-relaxed">Hi. Ask me about machine status, alerts, or recommendations.</div>
    </div>
    <form id="bot-form" class="border-t border-white/5 p-3 flex gap-2">
      <input id="bot-input" type="text" placeholder="Ask Bot..." autocomplete="off" required
        class="flex-1 px-3 py-2 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/25 transition">
      <button id="bot-btn" type="submit"
        class="px-3.5 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition disabled:opacity-50">Send</button>
    </form>
  </aside>

</main>

<div id="key-modal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-ink-900 border border-white/10 rounded-xl p-6">
    <h3 class="text-lg font-semibold mb-4">New API key</h3>
    <form id="key-form" class="space-y-3">
      <input name="name" placeholder="Name (e.g. Press-01 gateway)" required class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
      <select name="scope" class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
        <option value="ingest:write">ingest:write (machine can POST telemetry)</option>
        <option value="ingest:read">ingest:read (read-only)</option>
      </select>
      <div id="key-msg" class="text-sm text-center"></div>
      <div class="flex gap-2 pt-2">
        <button type="button" id="key-cancel" class="flex-1 py-2 border border-white/10 rounded-lg text-sm hover:border-white/25 transition">Cancel</button>
        <button type="submit" class="flex-1 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition">Create</button>
      </div>
    </form>
  </div>
</div>

<div id="billing-modal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
  <div class="w-full max-w-2xl bg-ink-900 border border-white/10 rounded-xl p-6 my-8">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold">Plan &amp; usage</h3>
      <button id="billing-close" class="text-neutral-500 hover:text-neutral-200">Close</button>
    </div>
    <div id="billing-current" class="mb-6"></div>
    <div id="billing-plans" class="grid md:grid-cols-2 gap-3"></div>
    <div id="billing-msg" class="text-sm text-center mt-4"></div>
  </div>
</div>

<div id="invites-modal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
  <div class="w-full max-w-xl bg-ink-900 border border-white/10 rounded-xl p-6 my-8">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold">Team</h3>
      <button id="invites-close" class="text-neutral-500 hover:text-neutral-200">Close</button>
    </div>
    <div id="invites-list" class="space-y-2 mb-4 max-h-60 overflow-y-auto">
      <div class="text-xs text-neutral-600 text-center py-4">No invites</div>
    </div>
    <div class="border-t border-white/10 pt-4">
      <div class="text-xs font-mono uppercase tracking-wider text-neutral-600 mb-3">Invite member</div>
      <form id="invite-form" class="grid grid-cols-3 gap-3">
        <input name="email" type="email" placeholder="email@company.com" required class="col-span-2 px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
        <select name="role" class="px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="viewer">viewer</option>
          <option value="admin">admin</option>
        </select>
        <div id="invite-msg" class="col-span-3 text-sm text-center"></div>
        <button type="submit" class="col-span-3 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-white/90 transition">Send invite</button>
      </form>
    </div>
  </div>
</div>

<div id="2fa-modal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-ink-900 border border-white/10 rounded-xl p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold">Two-factor auth</h3>
      <button id="2fa-close" class="text-neutral-500 hover:text-neutral-200">Close</button>
    </div>
    <div id="2fa-body"></div>
  </div>
</div>

<div id="rules-modal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
  <div class="w-full max-w-2xl bg-ink-900 border border-white/10 rounded-xl p-6 my-8">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold">Rules</h3>
      <button id="rules-close" class="text-neutral-500 hover:text-neutral-200">Close</button>
    </div>
    <div id="rules-list" class="space-y-2 mb-4 max-h-80 overflow-y-auto">
      <div class="text-xs text-neutral-600 text-center py-4">No rules</div>
    </div>
    <div class="border-t border-white/10 pt-4 mb-4">
      <div class="text-xs font-mono uppercase tracking-wider text-neutral-600 mb-3">Marketplace</div>
      <div id="templates-list" class="grid md:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
        <div class="text-xs text-neutral-600 col-span-2 text-center py-4">Loading...</div>
      </div>
    </div>

    <div class="border-t border-white/10 pt-4">
      <div class="text-xs font-mono uppercase tracking-wider text-neutral-600 mb-3">New rule</div>
      <form id="rule-form" class="grid grid-cols-2 gap-3">
        <input name="name" placeholder="Name (e.g. Temp high)" required class="col-span-2 px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
        <select name="metric" class="px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="temp">Temp</option>
          <option value="rpm">RPM</option>
          <option value="power">Power</option>
        </select>
        <select name="operator" class="px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="gt">&gt;</option>
          <option value="gte">&gt;=</option>
          <option value="lt">&lt;</option>
          <option value="lte">&lt;=</option>
          <option value="eq">=</option>
        </select>
        <input name="threshold" type="number" placeholder="Threshold" required class="px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
        <select name="severity" class="px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="info">info</option>
          <option value="warning">warning</option>
          <option value="critical">critical</option>
        </select>
        <select name="action" class="px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="alert">alert</option>
          <option value="command">command</option>
        </select>
        <input name="action_value" type="number" placeholder="Action value (opt)" class="px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
        <div id="rule-msg" class="col-span-2 text-sm text-center"></div>
        <button type="submit" class="col-span-2 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition">Add rule</button>
      </form>
    </div>
  </div>
</div>

<div id="key-reveal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div class="w-full max-w-lg bg-ink-900 border border-white/10 rounded-xl p-6">
    <h3 class="text-lg font-semibold mb-2">Save your API key</h3>
    <p class="text-xs text-neutral-500 mb-4">It will not be shown again. Paste this into your edge gateway config.</p>
    <div class="bg-ink-950 border border-white/10 rounded-lg p-3 font-mono text-xs break-all text-green-400" id="key-value"></div>
    <div class="flex gap-2 mt-4">
      <button id="key-copy" class="flex-1 py-2 border border-white/10 rounded-lg text-sm hover:border-white/25">Copy</button>
      <button id="key-close" class="flex-1 py-2 bg-white text-black rounded-lg font-medium text-sm">Done</button>
    </div>
  </div>
</div>

<div id="machine-modal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-ink-900 border border-white/10 rounded-xl p-6">
    <h3 class="text-lg font-semibold mb-4">Add machine</h3>
    <form id="machine-form" class="space-y-3">
      <input name="name" placeholder="Name (e.g. Press-01)" required class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
      <div class="grid grid-cols-2 gap-3">
        <input name="brand" placeholder="Brand" class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
        <input name="model" placeholder="Model" class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
      </div>
      <div class="grid grid-cols-2 gap-3">
        <select name="protocol" class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="">Protocol</option>
          <option value="modbus">Modbus</option>
          <option value="opcua">OPC-UA</option>
          <option value="serial">Serial</option>
          <option value="profinet">Profinet</option>
        </select>
        <input name="serial" placeholder="Serial no." class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
      </div>
      <div id="machine-msg" class="text-sm text-center"></div>
      <div class="flex gap-2 pt-2">
        <button type="button" id="machine-cancel" class="flex-1 py-2 border border-white/10 rounded-lg text-sm hover:border-white/25 transition">Cancel</button>
        <button type="submit" class="flex-1 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition">Save</button>
      </div>
    </form>
  </div>
</div>

<script>
  let tenant = null;
  let csrf = sessionStorage.getItem('csrf') || '';

  const $ = (id) => document.getElementById(id);

  function authHeaders(extra = {}) {
    return { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf, ...extra };
  }

  async function loadMe() {
    try {
      const r = await fetch('/api/auth/me', { headers: { 'X-CSRF-Token': csrf } });
      if (r.status === 401 || r.status === 403) { location.href = '/login'; return null; }
      const j = await r.json();
      tenant = j.user.tenant_id;
      csrf = j.csrf_token;
      sessionStorage.setItem('csrf', csrf);
      $('tenant-label').textContent = (j.tenant && j.tenant.factory_name) || tenant;
      return j;
    } catch (e) {
      location.href = '/login';
      return null;
    }
  }

  async function loadMachines() {
    try {
      const r = await fetch('/api/machines', { headers: { 'X-CSRF-Token': csrf } });
      const j = await r.json();
      const body = $('machines-body');
      const machines = j.machines || [];
      if (!machines.length) {
        body.innerHTML = '<tr><td colspan="5" class="text-xs text-neutral-600 text-center py-12">No machines. Click + Add.</td></tr>';
        return;
      }
      body.innerHTML = machines.map(m => {
        const s2 = (m.status || 'offline').toLowerCase();
        const cls = s2 === 'running' ? 'text-green-400 bg-green-500/10 border-green-500/20'
                  : s2 === 'idle' ? 'text-neutral-400 bg-white/5 border-white/10'
                  : 'text-red-400 bg-red-500/10 border-red-500/20';
        return '<tr class="border-b border-white/5 hover:bg-white/[0.02] transition">' +
          '<td class="px-4 py-2.5 font-medium">' + (m.name || '') + '</td>' +
          '<td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded text-xs font-mono border ' + cls + '">' + s2 + '</span></td>' +
          '<td class="px-4 py-2.5 text-right text-neutral-500 font-mono text-xs">' + (m.brand || '\u2014') + '</td>' +
          '<td class="px-4 py-2.5 text-right text-neutral-500 font-mono text-xs">' + (m.model || '\u2014') + '</td>' +
          '<td class="px-4 py-2.5 text-right text-neutral-500 font-mono text-xs">' + (m.protocol || '\u2014') + '</td>' +
        '</tr>';
      }).join('');
    } catch (e) { console.error(e); }
  }


  function fmt(n, digits = 0) {
    if (n === null || n === undefined || n === '') return '\u2014';
    return Number(n).toFixed(digits);
  }

  function statusBadge(status) {
    const s = (status || 'unknown').toLowerCase();
    const cls = s === 'running' ? 'text-green-400 bg-green-500/10 border-green-500/20'
              : s === 'idle' ? 'text-neutral-400 bg-white/5 border-white/10'
              : s === 'offline' ? 'text-red-400 bg-red-500/10 border-red-500/20'
              : 'text-neutral-400 bg-white/5 border-white/10';
    return '<span class="px-2 py-0.5 rounded text-xs font-mono border ' + cls + '">' + s + '</span>';
  }

  async function loadDashboard() {
    try {
      const r = await fetch('/api/dashboard', { headers: { 'X-Tenant-ID': tenant, 'X-CSRF-Token': csrf } });
      const j = await r.json();

      $('s-machines').textContent = j.machines ?? 0;
      $('s-commands').textContent = j.commands_24h ?? 0;

      const alerts = j.alerts || [];
      const totalAlerts = alerts.reduce((sum, a) => sum + (a.n || 0), 0);
      $('s-alerts').textContent = totalAlerts;

      const list = $('alerts-list');
      if (!alerts.length) {
        list.innerHTML = '<div class="text-xs text-neutral-600 text-center py-6">No alerts</div>';
      } else {
        list.innerHTML = alerts.map(a => {
          const sev = a.severity || 'info';
          const border = sev === 'critical' ? 'border-l-red-500'
                       : sev === 'warning' ? 'border-l-amber-500'
                       : 'border-l-neutral-600';
          return '<div class="border-l-2 ' + border + ' bg-ink-900 rounded-r-lg px-3 py-2">' +
            '<div class="flex items-center justify-between">' +
              '<span class="text-xs font-mono uppercase text-neutral-500">' + sev + '</span>' +
              '<span class="text-sm font-semibold">' + a.n + '</span>' +
            '</div>' +
          '</div>';
        }).join('');
      }

      $('status-label').textContent = 'Live';
    } catch (e) {
      $('status-label').textContent = 'Error';
      console.error(e);
    }
  }

  const meriChat = $('bot-chat');
  const meriForm = $('bot-form');
  const meriInput = $('bot-input');
  const meriBtn = $('bot-btn');

  function meriAdd(text, cls) {
    const div = document.createElement('div');
    div.className = cls === 'user'
      ? 'text-sm bg-blue-600 text-white rounded-lg p-3 ml-auto max-w-[85%] whitespace-pre-wrap'
      : 'text-sm bg-ink-900 border border-white/5 rounded-lg p-3 max-w-[85%] whitespace-pre-wrap text-neutral-200';
    div.textContent = text;
    meriChat.appendChild(div);
    meriChat.scrollTop = meriChat.scrollHeight;
    return div;
  }

  meriForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = meriInput.value.trim();
    if (!msg) return;
    meriAdd(msg, 'user');
    meriInput.value = '';
    meriBtn.disabled = true;
    const loading = meriAdd('...', 'bot');
    try {
      const r = await fetch('/api/bot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Tenant-ID': tenant, 'X-CSRF-Token': csrf },
        body: JSON.stringify({ message: msg })
      });
      const j = await r.json();
      loading.textContent = j.reply || j.error || '(no response)';
      if (j.advisory_only) {
        const meta = document.createElement('div');
        meta.className = 'text-xs text-neutral-600 mt-1 font-mono';
        meta.textContent = 'advisory only \xB7 bot';
        loading.appendChild(meta);
      }
    } catch (err) {
      loading.textContent = 'Error: ' + err.message;
    } finally {
      meriBtn.disabled = false;
      meriInput.focus();
    }
  });

  $('logout-btn').addEventListener('click', async () => {
    await fetch('/api/auth/logout', { method: 'POST', headers: { 'X-CSRF-Token': csrf } });
    sessionStorage.removeItem('csrf');
    location.href = '/login';
  });

  $('add-machine-btn').addEventListener('click', () => $('machine-modal').classList.remove('hidden'));
  $('machine-cancel').addEventListener('click', () => $('machine-modal').classList.add('hidden'));

  $('machine-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = $('machine-msg');
    msg.textContent = '';
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const r = await fetch('/api/machines', {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(data)
      });
      const j = await r.json();
      if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
      $('machine-modal').classList.add('hidden');
      e.target.reset();
      loadMachines();
      loadDashboard();
    } catch (err) { msg.innerHTML = '<span class="text-red-400">' + err.message + '</span>'; }
  });

  async function loadKeys() {
    try {
      const r = await fetch('/api/keys', { headers: { 'X-CSRF-Token': csrf } });
      const j = await r.json();
      const list = $('keys-list');
      const keys = (j.keys || []).filter(k => !k.revoked);
      if (!keys.length) { list.innerHTML = '<div class="text-xs text-neutral-600 text-center py-4">No keys</div>'; return; }
      list.innerHTML = keys.map(k => {
        const d = new Date((k.created_at || 0) * 1000).toISOString().slice(0, 10);
        return '<div class="group flex items-center justify-between px-3 py-2 rounded-md bg-ink-900 border border-white/5 text-xs">' +
          '<div><div class="font-medium text-neutral-300">' + k.name + '</div>' +
          '<div class="text-neutral-600 font-mono">' + k.scope + ' \xB7 ' + d + '</div></div>' +
          '<button data-revoke="' + k.id + '" class="text-neutral-600 hover:text-red-400 transition opacity-0 group-hover:opacity-100">Revoke</button>' +
        '</div>';
      }).join('');
      list.querySelectorAll('[data-revoke]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-revoke');
          if (!confirm('Revoke this key?')) return;
          await fetch('/api/keys/' + id, { method: 'DELETE', headers: { 'X-CSRF-Token': csrf } });
          loadKeys();
        });
      });
    } catch (e) { console.error(e); }
  }

  $('add-key-btn').addEventListener('click', () => $('key-modal').classList.remove('hidden'));
  $('key-cancel').addEventListener('click', () => $('key-modal').classList.add('hidden'));
  $('key-close').addEventListener('click', () => $('key-reveal').classList.add('hidden'));
  $('key-copy').addEventListener('click', () => {
    navigator.clipboard.writeText($('key-value').textContent);
    $('key-copy').textContent = 'Copied';
  });

  $('key-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = $('key-msg');
    msg.textContent = '';
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const r = await fetch('/api/keys', { method: 'POST', headers: authHeaders(), body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
      $('key-modal').classList.add('hidden');
      e.target.reset();
      $('key-value').textContent = j.key.key;
      $('key-reveal').classList.remove('hidden');
      loadKeys();
    } catch (err) { msg.innerHTML = '<span class="text-red-400">' + err.message + '</span>'; }
  });

  $('rules-btn').addEventListener('click', () => { $('rules-modal').classList.remove('hidden'); loadRules(); loadTemplates(); });

  async function loadTemplates() {
    const list = $('templates-list');
    try {
      const r = await fetch('/api/templates', { headers: { 'X-CSRF-Token': csrf } });
      const j = await r.json();
      const tpls = j.templates || [];
      if (!tpls.length) { list.innerHTML = '<div class="text-xs text-neutral-600 col-span-2 text-center py-4">No templates</div>'; return; }
      list.innerHTML = tpls.map(t => {
        const c = JSON.parse(t.config);
        return '<div class="group p-3 rounded-md bg-ink-950 border border-white/5 text-xs">' +
          '<div class="flex items-start justify-between gap-2">' +
            '<div class="min-w-0">' +
              '<div class="font-medium text-neutral-300 truncate">' + t.name + '</div>' +
              '<div class="text-neutral-600 font-mono text-[10px] mt-0.5">' + c.metric + ' ' + c.operator + ' ' + c.threshold + '</div>' +
              '<div class="text-neutral-600 text-[10px] mt-0.5">' + (t.category || '') + ' \xB7 ' + (t.installs || 0) + ' installs</div>' +
            '</div>' +
            '<button data-tpl="' + t.id + '" class="text-neutral-500 hover:text-green-400 transition flex-shrink-0">+ Install</button>' +
          '</div>' +
        '</div>';
      }).join('');
      list.querySelectorAll('[data-tpl]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-tpl');
          const r2 = await fetch('/api/templates/' + id + '/install', { method: 'POST', headers: { 'X-CSRF-Token': csrf } });
          const j2 = await r2.json();
          if (!r2.ok) { alert(j2.error || 'Install failed'); return; }
          btn.textContent = 'Installed';
          btn.classList.add('text-green-400');
          btn.disabled = true;
          loadRules();
        });
      });
    } catch (e) { list.innerHTML = '<div class="text-xs text-red-400 col-span-2 text-center py-4">' + e.message + '</div>'; }
  }
  $('rules-close').addEventListener('click', () => $('rules-modal').classList.add('hidden'));

  async function loadRules() {
    try {
      const r = await fetch('/api/rules', { headers: { 'X-CSRF-Token': csrf } });
      const j = await r.json();
      const list = $('rules-list');
      const rules = j.rules || [];
      if (!rules.length) { list.innerHTML = '<div class="text-xs text-neutral-600 text-center py-4">No rules</div>'; return; }
      list.innerHTML = rules.map(r2 => {
        const c = JSON.parse(r2.config);
        return '<div class="group flex items-center justify-between px-3 py-2 rounded-md bg-ink-950 border border-white/5 text-xs">' +
          '<div><div class="font-medium text-neutral-300">' + r2.name + '</div>' +
          '<div class="text-neutral-600 font-mono">' + c.metric + ' ' + c.operator + ' ' + c.threshold + ' \u2192 ' + c.action + ' (' + c.severity + ')</div></div>' +
          '<button data-del="' + r2.id + '" class="text-neutral-600 hover:text-red-400 transition opacity-0 group-hover:opacity-100">Delete</button>' +
        '</div>';
      }).join('');
      list.querySelectorAll('[data-del]').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (!confirm('Delete rule?')) return;
          await fetch('/api/rules/' + btn.getAttribute('data-del'), { method: 'DELETE', headers: { 'X-CSRF-Token': csrf } });
          loadRules();
        });
      });
    } catch (e) { console.error(e); }
  }

  $('rule-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = $('rule-msg');
    msg.textContent = '';
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const r = await fetch('/api/rules', {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(data),
      });
      const j = await r.json();
      if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
      e.target.reset();
      loadRules();
    } catch (err) { msg.innerHTML = '<span class="text-red-400">' + err.message + '</span>'; }
  });

  let ws = null;
  function connectWS() {
    try {
      const proto = location.protocol === "https:" ? "wss:" : "ws:";
      ws = new WebSocket(proto + "//" + location.host + "/api/ws");
      ws.onopen = () => console.log("WS open");
      ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.type === "telemetry") {
            loadDashboard();
            if (msg.actions && msg.actions.length) {
              console.log("Rule fired:", msg.actions);
            }
          }
        } catch {}
      };
      ws.onclose = () => setTimeout(connectWS, 3000);
      ws.onerror = () => {};
    } catch (e) { console.error(e); }
  }

  $('2fa-btn').addEventListener('click', () => { $('2fa-modal').classList.remove('hidden'); load2FA(); });
  $('2fa-close').addEventListener('click', () => $('2fa-modal').classList.add('hidden'));

  async function load2FA() {
    const body = $('2fa-body');
    body.innerHTML = '<div class="text-xs text-neutral-600 text-center py-4">Loading...</div>';
    try {
      const r = await fetch('/api/2fa/status', { headers: { 'X-CSRF-Token': csrf } });
      const j = await r.json();
      if (j.enabled) {
        body.innerHTML =
          '<div class="text-sm text-green-400 mb-4">Enabled since ' + new Date(j.verified_at * 1000).toISOString().slice(0,10) + '</div>' +
          '<div class="space-y-3">' +
          '<input id="2fa-disable-token" placeholder="6-digit code" class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 font-mono">' +
          '<button id="2fa-disable" class="w-full py-2 border border-red-500/30 text-red-400 rounded-lg text-sm hover:bg-red-500/10 transition">Disable 2FA</button>' +
          '</div>';
        $('2fa-disable').addEventListener('click', async () => {
          const token = $('2fa-disable-token').value.trim();
          const rr = await fetch('/api/2fa/disable', {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify({ token }),
          });
          const jj = await rr.json();
          if (!rr.ok) { alert(jj.error || 'Failed'); return; }
          alert('2FA disabled');
          load2FA();
        });
      } else {
        body.innerHTML =
          '<p class="text-sm text-neutral-400 mb-4">Protect your account with TOTP. Scan the QR in Google Authenticator, 1Password, or Authy.</p>' +
          '<button id="2fa-setup" class="w-full py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition">Start setup</button>';
        $('2fa-setup').addEventListener('click', async () => {
          const rr = await fetch('/api/2fa/setup', { method: 'POST', headers: authHeaders() });
          const jj = await rr.json();
          if (!rr.ok) { alert(jj.error || 'Failed'); return; }
          body.innerHTML =
            '<div class="text-xs text-neutral-500 mb-2">Secret</div>' +
            '<div class="bg-ink-950 border border-white/10 rounded-lg p-3 font-mono text-xs break-all mb-4">' + jj.secret + '</div>' +
            '<div class="text-xs text-neutral-500 mb-2">Or copy otpauth URI into your app</div>' +
            '<div class="bg-ink-950 border border-white/10 rounded-lg p-3 font-mono text-xs break-all mb-4">' + jj.uri + '</div>' +
            '<div class="text-xs text-neutral-500 mb-2">Enter 6-digit code to confirm</div>' +
            '<input id="2fa-verify-token" maxlength="6" class="w-full px-3 py-2 bg-ink-950 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 font-mono mb-3">' +
            '<button id="2fa-verify" class="w-full py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition">Confirm</button>' +
            '<div id="2fa-verify-msg" class="text-sm text-center mt-2"></div>';
          $('2fa-verify').addEventListener('click', async () => {
            const token = $('2fa-verify-token').value.trim();
            const rv = await fetch('/api/2fa/verify', {
              method: 'POST',
              headers: authHeaders(),
              body: JSON.stringify({ token }),
            });
            const jv = await rv.json();
            if (!rv.ok) { $('2fa-verify-msg').innerHTML = '<span class="text-red-400">' + (jv.error || 'Failed') + '</span>'; return; }
            $('2fa-body').innerHTML =
              '<div class="text-sm text-green-400 mb-3">2FA enabled. Save your recovery codes.</div>' +
              '<div class="bg-ink-950 border border-white/10 rounded-lg p-3 font-mono text-xs space-y-1">' +
                jv.recovery_codes.map(c => '<div>' + c + '</div>').join('') +
              '</div>' +
              '<button id="2fa-done" class="w-full mt-4 py-2 bg-white text-black rounded-lg font-medium text-sm">Done</button>';
            $('2fa-done').addEventListener('click', () => $('2fa-modal').classList.add('hidden'));
          });
        });
      }
    } catch (e) { body.innerHTML = '<div class="text-sm text-red-400">' + e.message + '</div>'; }
  }

  $('invites-btn').addEventListener('click', () => { $('invites-modal').classList.remove('hidden'); loadInvites(); });
  $('invites-close').addEventListener('click', () => $('invites-modal').classList.add('hidden'));

  async function loadInvites() {
    const list = $('invites-list');
    try {
      const r = await fetch('/api/invites', { headers: { 'X-CSRF-Token': csrf } });
      const j = await r.json();
      if (!r.ok) { list.innerHTML = '<div class="text-xs text-red-400 text-center py-4">' + (j.error || 'Failed') + '</div>'; return; }
      const invites = (j.invites || []).filter(i => !i.accepted_at);
      if (!invites.length) { list.innerHTML = '<div class="text-xs text-neutral-600 text-center py-4">No pending invites</div>'; return; }
      list.innerHTML = invites.map(i => {
        const exp = new Date(i.expires_at * 1000).toISOString().slice(0,10);
        return '<div class="group flex items-center justify-between px-3 py-2 rounded-md bg-ink-950 border border-white/5 text-xs">' +
          '<div><div class="text-neutral-300">' + i.email + '</div>' +
          '<div class="text-neutral-600 font-mono">' + i.role + ' \xB7 exp ' + exp + '</div></div>' +
          '<button data-revoke="' + i.id + '" class="text-neutral-600 hover:text-red-400 transition opacity-0 group-hover:opacity-100">Revoke</button>' +
        '</div>';
      }).join('');
      list.querySelectorAll('[data-revoke]').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (!confirm('Revoke invite?')) return;
          await fetch('/api/invites/' + btn.getAttribute('data-revoke'), { method: 'DELETE', headers: { 'X-CSRF-Token': csrf } });
          loadInvites();
        });
      });
    } catch (e) { list.innerHTML = '<div class="text-xs text-red-400 text-center py-4">' + e.message + '</div>'; }
  }

  $('invite-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = $('invite-msg');
    msg.textContent = '';
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const r = await fetch('/api/invites', {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(data),
      });
      const j = await r.json();
      if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
      msg.innerHTML = '<span class="text-green-400">' + (j.email_sent ? 'Invite sent' : 'Invite created (email not sent)') + '</span>';
      e.target.reset();
      loadInvites();
    } catch (err) { msg.innerHTML = '<span class="text-red-400">' + err.message + '</span>'; }
  });

  $('billing-btn').addEventListener('click', () => { $('billing-modal').classList.remove('hidden'); loadBilling(); });
  $('billing-close').addEventListener('click', () => $('billing-modal').classList.add('hidden'));

  async function loadBilling() {
    const cur = $('billing-current');
    const grid = $('billing-plans');
    cur.innerHTML = '<div class="text-xs text-neutral-600 text-center py-4">Loading...</div>';
    grid.innerHTML = '';
    try {
      const [curR, plansR] = await Promise.all([
        fetch('/api/billing/current', { headers: { 'X-CSRF-Token': csrf } }),
        fetch('/api/billing/plans', { headers: { 'X-CSRF-Token': csrf } }),
      ]);
      const cj = await curR.json();
      const pj = await plansR.json();

      cur.innerHTML =
        '<div class="p-4 rounded-lg bg-ink-950 border border-white/5">' +
          '<div class="flex items-center justify-between mb-2">' +
            '<div class="font-semibold">' + (cj.plan && cj.plan.name || 'Free') + '</div>' +
            '<div class="text-xs text-neutral-500">$' + (cj.plan && cj.plan.price_monthly || 0) + '/mo</div>' +
          '</div>' +
          '<div class="text-xs text-neutral-500 font-mono">' +
            'machines ' + cj.usage.machines + '/' + (cj.plan && cj.plan.max_machines) +
            ' \xB7 users ' + cj.usage.users + '/' + (cj.plan && cj.plan.max_users) +
          '</div>' +
        '</div>';

      grid.innerHTML = (pj.plans || []).map(p2 => {
        const active = cj.plan && cj.plan.id === p2.id;
        const features = JSON.parse(p2.features || '[]');
        return '<div class="p-4 rounded-lg border ' + (active ? 'border-white/30 bg-ink-950' : 'border-white/5') + '">' +
          '<div class="flex items-center justify-between mb-2">' +
            '<div class="font-semibold">' + p2.name + '</div>' +
            '<div class="text-xs text-neutral-500">$' + p2.price_monthly + '/mo</div>' +
          '</div>' +
          '<ul class="text-xs text-neutral-500 space-y-1 mb-3">' +
            features.map(f => '<li>\xB7 ' + f + '</li>').join('') +
          '</ul>' +
          '<button data-plan="' + p2.id + '" ' + (active ? 'disabled' : '') + ' class="w-full py-2 text-xs rounded-md font-medium transition ' + (active ? 'bg-white/10 text-neutral-500 cursor-not-allowed' : 'bg-white text-black hover:bg-neutral-200') + '">' + (active ? 'Current' : 'Choose') + '</button>' +
        '</div>';
      }).join('');

      grid.querySelectorAll('[data-plan]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const planId = btn.getAttribute('data-plan');
          const msg = $('billing-msg');
          msg.textContent = '';
          const r = await fetch('/api/billing/checkout', {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify({ plan_id: planId }),
          });
          const j = await r.json();
          if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
          if (j.url) { location.href = j.url; return; }
          msg.innerHTML = '<span class="text-green-400">' + (j.message || 'Plan selected') + '</span>';
          loadBilling();
        });
      });
    } catch (e) {
      cur.innerHTML = '<div class="text-sm text-red-400">' + e.message + '</div>';
    }
  }

  (async () => {
    const me = await loadMe();
    if (!me) return;
    await loadMachines();
    await loadKeys();
    await loadDashboard();
    connectWS();
  })();
<\/script>
</body>
</html>`;

// src/web/auth.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var SHARED = `<script src="https://cdn.tailwindcss.com"><\/script>
<script>tailwind.config={darkMode:'class',theme:{extend:{colors:{ink:{950:'#0a0a0a',900:'#111111',800:'#1a1a1a',700:'#262626'}}}}}<\/script>
<style>body{-webkit-font-smoothing:antialiased}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#0a0a0a}::-webkit-scrollbar-thumb{background:#262626;border-radius:4px}</style>`;
var SIGNUP_HTML = `<!DOCTYPE html>
<html lang="en" class="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sign up \u2014 BahBorak</title>${SHARED}</head>
<body class="bg-ink-950 text-neutral-200 font-sans min-h-screen flex flex-col">
<header class="border-b border-white/5 px-6 h-14 flex items-center"><a href="/" class="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400 hover:text-neutral-100">BahBorak</a></header>
<main class="flex-1 flex items-center justify-center p-6">
<div class="w-full max-w-md">
  <h1 class="text-3xl font-semibold tracking-tight mb-2">Create account</h1>
  <p class="text-sm text-neutral-500 mb-8">Set up your factory on BahBorak.</p>
  <form id="f" class="space-y-4">
    <div><label class="block text-xs text-neutral-500 mb-1.5">Email</label>
    <input name="email" type="email" required class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition"></div>
    <div><label class="block text-xs text-neutral-500 mb-1.5">Password <span class="text-neutral-600">(min 12, upper+lower+number)</span></label>
    <input name="password" type="password" required minlength="12" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition"></div>
    <div><label class="block text-xs text-neutral-500 mb-1.5">Factory name</label>
    <input name="factory_name" type="text" required class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition"></div>
    <div class="grid grid-cols-2 gap-3">
      <div><label class="block text-xs text-neutral-500 mb-1.5">Country</label>
      <input name="country" type="text" placeholder="e.g. Germany" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition"></div>
      <div><label class="block text-xs text-neutral-500 mb-1.5">Industry</label>
      <input name="industry" type="text" placeholder="e.g. Automotive" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition"></div>
    </div>
    <button type="submit" class="w-full py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition disabled:opacity-50">Create account</button>
    <div id="msg" class="text-sm text-center"></div>
  </form>
  <p class="text-sm text-neutral-500 text-center mt-6">Already have an account? <a href="/login" class="text-neutral-200 hover:underline">Log in</a></p>
</div>
</main>
<script>
const f = document.getElementById('f');
const msg = document.getElementById('msg');
f.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '';
  const btn = f.querySelector('button');
  btn.disabled = true;
  const data = Object.fromEntries(new FormData(f));
  try {
    const r = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const j = await r.json();
    if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Signup failed') + '</span>'; return; }
    msg.innerHTML = '<span class="text-green-400">Account created. Redirecting to verify...</span>';
    setTimeout(() => location.href = j.verify_url, 1200);
  } catch (err) { msg.innerHTML = '<span class="text-red-400">' + err.message + '</span>'; }
  finally { btn.disabled = false; }
});
<\/script>
</body></html>`;
var LOGIN_HTML = `<!DOCTYPE html>
<html lang="en" class="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Log in \u2014 BahBorak</title>${SHARED}</head>
<body class="bg-ink-950 text-neutral-200 font-sans min-h-screen flex flex-col">
<header class="border-b border-white/5 px-6 h-14 flex items-center"><a href="/" class="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400 hover:text-neutral-100">BahBorak</a></header>
<main class="flex-1 flex items-center justify-center p-6">
<div class="w-full max-w-md">
  <h1 class="text-3xl font-semibold tracking-tight mb-2">Log in</h1>
  <p class="text-sm text-neutral-500 mb-8">Welcome back.</p>
  <form id="f" class="space-y-4">
    <div><label class="block text-xs text-neutral-500 mb-1.5">Email</label>
    <input name="email" type="email" required class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition"></div>
    <div><label class="block text-xs text-neutral-500 mb-1.5">Password</label>
    <input name="password" type="password" required class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition"></div>
    <div id="totp-field" class="hidden"><label class="block text-xs text-neutral-500 mb-1.5">2FA code <span class="text-neutral-600">(6 digits or recovery)</span></label>
    <input name="totp" type="text" maxlength="11" autocomplete="one-time-code" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30 transition font-mono"></div>
    <button type="submit" class="w-full py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition disabled:opacity-50">Log in</button>
    <div id="msg" class="text-sm text-center"></div>
  </form>
  <p class="text-sm text-neutral-500 text-center mt-6">No account? <a href="/signup" class="text-neutral-200 hover:underline">Sign up</a></p>
</div>
</main>
<script>
const f = document.getElementById('f');
const msg = document.getElementById('msg');
f.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '';
  const btn = f.querySelector('button');
  btn.disabled = true;
  const data = Object.fromEntries(new FormData(f));
  try {
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const j = await r.json();
    if (j.requires_2fa) {
      document.getElementById('totp-field').classList.remove('hidden');
      msg.innerHTML = '<span class="text-amber-400">Enter your 2FA code</span>';
      document.querySelector('[name=totp]').focus();
      btn.disabled = false;
      return;
    }
    if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Login failed') + '</span>'; return; }
    sessionStorage.setItem('csrf', j.csrf_token);
    // Check onboarding status
    try {
      const me = await fetch('/api/auth/me', { headers: { 'X-CSRF-Token': j.csrf_token } });
      const mj = await me.json();
      if (mj.tenant && mj.tenant.factory_name && mj.tenant.onboarded !== 0) {
        location.href = '/dashboard';
      } else {
        location.href = '/onboarding';
      }
    } catch (e) {
      location.href = '/dashboard';
    }
  } catch (err) { msg.innerHTML = '<span class="text-red-400">' + err.message + '</span>'; }
  finally { btn.disabled = false; }
});
<\/script>
</body></html>`;
var VERIFY_HTML = `<!DOCTYPE html>
<html lang="en" class="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Verify \u2014 BahBorak</title>${SHARED}</head>
<body class="bg-ink-950 text-neutral-200 font-sans min-h-screen flex flex-col">
<header class="border-b border-white/5 px-6 h-14 flex items-center"><a href="/" class="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">BahBorak</a></header>
<main class="flex-1 flex items-center justify-center p-6">
<div class="w-full max-w-md text-center">
  <h1 class="text-2xl font-semibold mb-4" id="title">Verifying...</h1>
  <p class="text-sm text-neutral-500 mb-8" id="sub">Please wait.</p>
  <a href="/login" class="inline-block px-5 py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition" id="cta" style="display:none">Go to login</a>
</div>
</main>
<script>
(async () => {
  const token = new URLSearchParams(location.search).get('token');
  const title = document.getElementById('title');
  const sub = document.getElementById('sub');
  const cta = document.getElementById('cta');
  if (!token) { title.textContent = 'Missing token'; sub.textContent = 'No verification token provided.'; cta.style.display = 'inline-block'; return; }
  try {
    const r = await fetch('/api/auth/verify?token=' + encodeURIComponent(token));
    const j = await r.json();
    if (r.ok) { title.textContent = 'Email verified'; sub.textContent = j.message; }
    else { title.textContent = 'Verification failed'; sub.textContent = j.error; }
  } catch (e) { title.textContent = 'Error'; sub.textContent = e.message; }
  cta.style.display = 'inline-block';
})();
<\/script>
</body></html>`;
var ACCEPT_HTML2 = `<!DOCTYPE html>
<html lang="en" class="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Accept invite \u2014 BahBorak</title>${SHARED}</head>
<body class="bg-ink-950 text-neutral-200 font-sans min-h-screen flex flex-col">
<header class="border-b border-white/5 px-6 h-14 flex items-center"><a href="/" class="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">BahBorak</a></header>
<main class="flex-1 flex items-center justify-center p-6">
<div class="w-full max-w-md">
  <h1 class="text-3xl font-semibold tracking-tight mb-2">Accept invite</h1>
  <p class="text-sm text-neutral-500 mb-8">Set a password to join the workspace.</p>
  <form id="f" class="space-y-4">
    <div><label class="block text-xs text-neutral-500 mb-1.5">Password <span class="text-neutral-600">(min 12, upper+lower+number)</span></label>
    <input name="password" type="password" required minlength="12" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30"></div>
    <button type="submit" class="w-full py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition disabled:opacity-50">Create account</button>
    <div id="msg" class="text-sm text-center"></div>
  </form>
  <p class="text-sm text-neutral-500 text-center mt-6">Already have an account? <a href="/login" class="text-neutral-200 hover:underline">Log in</a></p>
</div>
</main>
<script>
const f = document.getElementById('f');
const msg = document.getElementById('msg');
f.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '';
  const btn = f.querySelector('button');
  btn.disabled = true;
  const token = new URLSearchParams(location.search).get('token');
  if (!token) { msg.innerHTML = '<span class="text-red-400">Missing token</span>'; btn.disabled = false; return; }
  const data = Object.fromEntries(new FormData(f));
  try {
    const r = await fetch('/api/auth/accept', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password: data.password })
    });
    const j = await r.json();
    if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
    msg.innerHTML = '<span class="text-green-400">' + j.message + '</span>';
    setTimeout(() => location.href = '/login', 1500);
  } catch (err) { msg.innerHTML = '<span class="text-red-400">' + err.message + '</span>'; }
  finally { btn.disabled = false; }
});
<\/script>
</body></html>`;

// src/bot/ui.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var BOT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bot \u2014 BahBorak</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, system-ui, sans-serif; background: #0a0a0a; color: #e5e5e5; height: 100vh; display: flex; flex-direction: column; }
  header { padding: 16px 24px; border-bottom: 1px solid #1f1f1f; display: flex; align-items: center; gap: 12px; }
  .logo { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: #737373; }
  .name { font-size: 16px; font-weight: 600; }
  .dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; margin-left: auto; }
  main { flex: 1; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 800px; width: 100%; margin: 0 auto; }
  .msg { padding: 12px 16px; border-radius: 12px; line-height: 1.5; font-size: 14px; max-width: 85%; white-space: pre-wrap; }
  .user { background: #1d4ed8; align-self: flex-end; }
  .bot { background: #171717; border: 1px solid #262626; align-self: flex-start; }
  .meta { font-size: 11px; color: #525252; margin-top: 6px; }
  form { padding: 16px 24px; border-top: 1px solid #1f1f1f; display: flex; gap: 8px; max-width: 800px; width: 100%; margin: 0 auto; }
  input[type=text] { flex: 1; padding: 12px 16px; background: #171717; border: 1px solid #262626; border-radius: 8px; color: #e5e5e5; font-size: 14px; outline: none; }
  input[type=text]:focus { border-color: #404040; }
  button { padding: 12px 20px; background: #e5e5e5; color: #0a0a0a; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 14px; }
  button:disabled { opacity: 0.5; cursor: not-allowed; }
  .tenant { font-size: 12px; color: #525252; padding: 8px 24px; border-bottom: 1px solid #1f1f1f; }
</style>
</head>
<body>
<header>
  <div class="logo">BahBorak</div>
  <div class="name">Bot</div>
  <div class="dot"></div>
</header>
<div class="tenant">Tenant: <span id="tenant"></span></div>
<main id="chat">
  <div class="msg bot">Hi. I am Bot. I can summarize machine performance, alerts, and recommendations. I never control machines. Ask me anything.</div>
</main>
<form id="f">
  <input type="text" id="q" placeholder="Ask Bot..." autocomplete="off" required>
  <button type="submit" id="b">Send</button>
</form>
<script>
  let tenant = null;
  let csrf = sessionStorage.getItem('csrf') || '';
  (async () => {
    try {
      const r = await fetch('/api/auth/me', { headers: { 'X-CSRF-Token': csrf } });
      if (r.status === 401 || r.status === 403) { location.href = '/login'; return; }
      const j = await r.json();
      tenant = j.user.tenant_id;
      csrf = j.csrf_token;
      sessionStorage.setItem('csrf', csrf);
      document.getElementById('tenant').textContent = (j.tenant && j.tenant.factory_name) || tenant;
    } catch (e) { location.href = '/login'; }
  })();
  const chat = document.getElementById('chat');
  const f = document.getElementById('f');
  const q = document.getElementById('q');
  const b = document.getElementById('b');

  function add(text, cls) {
    const d = document.createElement('div');
    d.className = 'msg ' + cls;
    d.textContent = text;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
  }

  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = q.value.trim();
    if (!msg) return;
    add(msg, 'user');
    q.value = '';
    b.disabled = true;
    add('...', 'bot');
    const loading = chat.lastChild;
    try {
      const r = await fetch('/api/bot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Tenant-ID': tenant, 'X-CSRF-Token': csrf },
        body: JSON.stringify({ message: msg })
      });
      const j = await r.json();
      loading.textContent = j.reply || j.error || '(no response)';
      if (j.advisory_only) {
        const m = document.createElement('div');
        m.className = 'meta';
        m.textContent = 'advisory only \xB7 bot';
        loading.appendChild(m);
      }
    } catch (err) {
      loading.textContent = 'Error: ' + err.message;
    } finally {
      b.disabled = false;
      q.focus();
    }
  });

  q.focus();
<\/script>
</body>
</html>`;

// src/web/onboarding.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ONBOARDING_HTML = `<!DOCTYPE html>
<html lang="en" class="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Onboarding \u2014 BahBorak</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script>tailwind.config={darkMode:'class',theme:{extend:{colors:{ink:{950:'#0a0a0a',900:'#111111',800:'#1a1a1a',700:'#262626'}}}}}<\/script>
<style>body{-webkit-font-smoothing:antialiased}</style>
</head>
<body class="bg-ink-950 text-neutral-200 font-sans min-h-screen flex flex-col">
<header class="border-b border-white/5 px-6 h-14 flex items-center justify-between">
  <a href="/" class="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">BahBorak</a>
  <button id="logout" class="text-xs text-neutral-500 hover:text-red-400 transition">Logout</button>
</header>
<main class="flex-1 flex items-center justify-center p-6">
<div class="w-full max-w-2xl">
  <div class="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-3">Step <span id="step-num">1</span> of 3</div>
  <h1 class="text-3xl font-semibold tracking-tight mb-2" id="step-title">Factory details</h1>
  <p class="text-sm text-neutral-500 mb-8" id="step-sub">Tell us about your facility.</p>

  <form id="step-form" class="space-y-4">
    <div id="step-1">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label class="block text-xs text-neutral-500 mb-1.5">Factory name</label>
        <input name="factory_name" required class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30"></div>
        <div><label class="block text-xs text-neutral-500 mb-1.5">Country</label>
        <input name="country" placeholder="e.g. Germany" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30"></div>
        <div><label class="block text-xs text-neutral-500 mb-1.5">Industry</label>
        <input name="industry" placeholder="e.g. Automotive" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30"></div>
        <div><label class="block text-xs text-neutral-500 mb-1.5">Default protocol</label>
        <select name="default_protocol" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="modbus">Modbus</option>
          <option value="opcua">OPC-UA</option>
          <option value="profinet">Profinet</option>
          <option value="serial">Serial</option>
        </select></div>
      </div>
    </div>

    <div id="step-2" class="hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label class="block text-xs text-neutral-500 mb-1.5">Machine name</label>
        <input name="machine_name" placeholder="e.g. Press-01" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30"></div>
        <div><label class="block text-xs text-neutral-500 mb-1.5">Brand</label>
        <input name="machine_brand" placeholder="e.g. Siemens" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30"></div>
        <div><label class="block text-xs text-neutral-500 mb-1.5">Model</label>
        <input name="machine_model" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30"></div>
        <div><label class="block text-xs text-neutral-500 mb-1.5">Protocol</label>
        <select name="machine_protocol" class="w-full px-3.5 py-2.5 bg-ink-900 border border-white/10 rounded-lg text-sm outline-none focus:border-white/30">
          <option value="modbus">Modbus</option>
          <option value="opcua">OPC-UA</option>
          <option value="profinet">Profinet</option>
          <option value="serial">Serial</option>
        </select></div>
      </div>
    </div>

    <div id="step-3" class="hidden">
      <div class="p-6 rounded-xl bg-ink-900 border border-white/10">
        <div class="text-sm text-neutral-300 mb-4">Your API key will be generated. Paste it into your edge gateway.</div>
        <div id="api-key-box" class="hidden">
          <div class="bg-ink-950 border border-white/10 rounded-lg p-3 font-mono text-xs break-all text-green-400" id="api-key-value"></div>
          <button type="button" id="copy-key" class="mt-3 w-full py-2 border border-white/10 rounded-lg text-sm hover:border-white/25">Copy key</button>
        </div>
      </div>
    </div>

    <div id="msg" class="text-sm text-center"></div>
    <div class="flex gap-2 pt-2">
      <button type="button" id="back-btn" class="hidden flex-1 py-2.5 border border-white/10 rounded-lg text-sm hover:border-white/25">Back</button>
      <button type="submit" id="next-btn" class="flex-1 py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-neutral-200 transition">Continue</button>
    </div>
  </form>
</div>
</main>
<script>
const $ = (id) => document.getElementById(id);
let step = 1;
let csrf = sessionStorage.getItem('csrf') || '';
let apiKey = null;

$('logout').addEventListener('click', async () => {
  await fetch('/api/auth/logout', { method: 'POST', headers: { 'X-CSRF-Token': csrf } });
  sessionStorage.removeItem('csrf');
  location.href = '/login';
});

async function loadMe() {
  const r = await fetch('/api/auth/me', { headers: { 'X-CSRF-Token': csrf } });
  if (r.status === 401 || r.status === 403) { location.href = '/login'; return; }
  const j = await r.json();
  csrf = j.csrf_token;
  sessionStorage.setItem('csrf', csrf);
  if (j.tenant && j.tenant.factory_name) {
    document.querySelector('[name=factory_name]').value = j.tenant.factory_name;
    document.querySelector('[name=country]').value = j.tenant.country || '';
    document.querySelector('[name=industry]').value = j.tenant.industry || '';
    document.querySelector('[name=default_protocol]').value = j.tenant.default_protocol || 'modbus';
  }
}

function setStep(n) {
  step = n;
  $('step-num').textContent = n;
  [1,2,3].forEach(i => $('step-' + i).classList.toggle('hidden', i !== n));
  $('back-btn').classList.toggle('hidden', n === 1);
  const titles = ['Factory details', 'First machine', 'API key'];
  const subs = ['Tell us about your facility.', 'Optional. You can add more later.', 'Use this key for your edge gateway.'];
  $('step-title').textContent = titles[n-1];
  $('step-sub').textContent = subs[n-1];
  if (n === 3) { $('next-btn').textContent = 'Finish'; }
  else { $('next-btn').textContent = 'Continue'; }
}

$('back-btn').addEventListener('click', () => setStep(step - 1));

$('step-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = $('msg');
  msg.textContent = '';
  const form = Object.fromEntries(new FormData(e.target));

  if (step === 1) {
    const r = await fetch('/api/tenants/me', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
      body: JSON.stringify({
        factory_name: form.factory_name,
        country: form.country,
        industry: form.industry,
        default_protocol: form.default_protocol,
      }),
    });
    const j = await r.json();
    if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
    setStep(2);
    return;
  }

  if (step === 2) {
    if (form.machine_name) {
      const r = await fetch('/api/machines', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
        body: JSON.stringify({
          name: form.machine_name,
          brand: form.machine_brand,
          model: form.machine_model,
          protocol: form.machine_protocol,
        }),
      });
      if (!r.ok) { const j = await r.json(); msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
    }
    // create API key
    const r = await fetch('/api/keys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
      body: JSON.stringify({ name: 'Edge Gateway', scope: 'ingest:write' }),
    });
    const j = await r.json();
    if (!r.ok) { msg.innerHTML = '<span class="text-red-400">' + (j.error || 'Failed') + '</span>'; return; }
    apiKey = j.key.key;
    $('api-key-value').textContent = apiKey;
    $('api-key-box').classList.remove('hidden');
    setStep(3);
    return;
  }

  if (step === 3) {
    location.href = '/dashboard';
  }
});

$('copy-key').addEventListener('click', () => {
  navigator.clipboard.writeText($('api-key-value').textContent);
  $('copy-key').textContent = 'Copied';
});

(async () => {
  await loadMe();
  setStep(1);
})();
<\/script>
</body></html>`;

// src/tenant/durable-object.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/rules/engine.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var RulesEngine = class {
  static {
    __name(this, "RulesEngine");
  }
  constructor(rules = []) {
    this.rules = rules;
  }
  evaluate(data, ctx) {
    const results = [];
    for (const rule of this.rules) {
      try {
        if (!rule.enabled && rule.enabled !== void 0) continue;
        if (rule.when(data)) {
          const result = rule.then(ctx, data);
          results.push({
            rule: rule.id,
            ok: true,
            result: result ?? null
          });
        }
      } catch (e) {
        results.push({
          rule: rule.id,
          ok: false,
          error: e.message
        });
        ctx.alert(`Rule ${rule.id} failed: ${e.message}`, "error");
      }
    }
    return results;
  }
};

// src/rules/registry.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/rules/temperature.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var temperatureRules = [
  {
    id: "TEMP_CRITICAL",
    when: /* @__PURE__ */ __name((d) => d.temp >= 95, "when"),
    then: /* @__PURE__ */ __name((ctx, d) => {
      ctx.alert(`CRITICAL: Temp ${d.temp}C on ${d.machine_id}`, "critical");
      ctx.command("set_speed", Math.round(d.rpm * 0.8), "TEMP_CRITICAL");
    }, "then")
  },
  {
    id: "TEMP_WARN",
    when: /* @__PURE__ */ __name((d) => d.temp >= 85 && d.temp < 95, "when"),
    then: /* @__PURE__ */ __name((ctx, d) => {
      ctx.alert(`WARN: Temp ${d.temp}C on ${d.machine_id}`, "warning");
    }, "then")
  },
  {
    id: "TEMP_OK",
    when: /* @__PURE__ */ __name((d) => d.temp < 80, "when"),
    then: /* @__PURE__ */ __name((ctx) => {
      ctx.clearAlert();
    }, "then")
  }
];

// src/rules/power.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var powerRules = [
  {
    id: "POWER_IDLE_CUT",
    when: /* @__PURE__ */ __name((d) => d.status === "idle" && d.power > 5, "when"),
    then: /* @__PURE__ */ __name((ctx, d) => {
      ctx.command("power_down", 0, "POWER_IDLE_CUT");
      ctx.alert(`Idle power cut: ${d.machine_id}`, "info");
    }, "then")
  },
  {
    id: "POWER_SPIKE",
    when: /* @__PURE__ */ __name((d) => d.power > 50, "when"),
    then: /* @__PURE__ */ __name((ctx, d) => {
      ctx.alert(`Power spike ${d.power}kW on ${d.machine_id}`, "critical");
    }, "then")
  }
];

// src/rules/machine.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var machineRules = [
  {
    id: "MACHINE_OFFLINE",
    when: /* @__PURE__ */ __name((d) => d.status === "offline", "when"),
    then: /* @__PURE__ */ __name((ctx, d) => {
      ctx.alert(`Machine offline: ${d.machine_id}`, "critical");
    }, "then")
  },
  {
    id: "RPM_OVERSPEED",
    when: /* @__PURE__ */ __name((d) => d.rpm > 3500, "when"),
    then: /* @__PURE__ */ __name((ctx, d) => {
      ctx.alert(`Overspeed ${d.rpm} RPM on ${d.machine_id}`, "critical");
      ctx.command("set_speed", 3e3, "RPM_OVERSPEED");
    }, "then")
  }
];

// src/rules/registry.js
var DEFAULT_RULES = [
  ...temperatureRules,
  ...powerRules,
  ...machineRules
];

// src/audit/log.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function logAudit(env2, entry) {
  const record = {
    ts: Math.floor(Date.now() / 1e3),
    ...entry
  };
  try {
    await env2.DB.prepare(
      "INSERT INTO commands (tenant_id, machine_id, action, value, reason, rule_id) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(
      record.tenant_id,
      record.machine_id,
      "audit",
      null,
      JSON.stringify(record.actions ?? []),
      null
    ).run();
  } catch (e) {
    console.error("audit D1 failed:", e.message);
  }
  try {
    const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const key = `audit/${record.tenant_id}/${date}/${record.ts}-${crypto.randomUUID()}.json`;
    await env2.AUDIT.put(key, JSON.stringify(record));
  } catch (e) {
    console.error("audit R2 failed:", e.message);
  }
}
__name(logAudit, "logAudit");

// src/guardrail/rate-limit.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function checkRateLimit2(env2, tenantId, machineId) {
  const key = `rl:${tenantId}:${machineId}`;
  const last = await env2.KV.get(key);
  const now = Date.now();
  if (last) {
    const elapsed = now - parseInt(last, 10);
    if (elapsed < CONFIG.RATE_LIMIT_MS) {
      return false;
    }
  }
  await env2.KV.put(key, String(now), { expirationTtl: 60 });
  return true;
}
__name(checkRateLimit2, "checkRateLimit");

// src/guardrail/human-override.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
async function isHumanOverride(env2, tenantId, machineId) {
  const key = `override:${tenantId}:${machineId}`;
  const v = await env2.KV.get(key);
  return v === "true";
}
__name(isHumanOverride, "isHumanOverride");

// src/tenant/durable-object.js
var Tenant = class {
  static {
    __name(this, "Tenant");
  }
  constructor(state, env2) {
    this.state = state;
    this.env = env2;
    this.engine = new RulesEngine(DEFAULT_RULES);
  }
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const upgrade = request.headers.get("Upgrade");
    if (upgrade === "websocket") return this.handleWebSocket(request);
    if (path === "/ingest") return this.ingest(request);
    if (path === "/status") return this.status();
    if (path === "/report") return this.report();
    return new Response("Not Found", { status: 404 });
  }
  get tenantId() {
    return this.state.id.toString();
  }
  async ingest(request) {
    const data = await request.json();
    if (await isKilled(this.env, this.tenantId)) {
      return Response.json({ ok: false, reason: "kill_switch_active" });
    }
    if (await isHumanOverride(this.env, this.tenantId, data.machine_id)) {
      return Response.json({ ok: false, reason: "human_override" });
    }
    const ctx = this.makeContext(data.machine_id);
    const actions = this.engine.evaluate(data, ctx);
    if (data.aggregate) {
      const a = data.aggregate;
      await this.env.DB.prepare(
        `INSERT INTO telemetry_agg (
          tenant_id, machine_id, hour_bucket, samples,
          avg_temp, max_temp, min_temp,
          avg_rpm, max_rpm, min_rpm,
          avg_power, max_power, min_power,
          status_summary, alerts_count, commands_count
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(tenant_id, machine_id, hour_bucket) DO UPDATE SET
          samples = samples + excluded.samples,
          avg_temp = (avg_temp * samples + excluded.avg_temp * excluded.samples) / (samples + excluded.samples),
          max_temp = MAX(max_temp, excluded.max_temp),
          min_temp = MIN(min_temp, excluded.min_temp),
          avg_rpm = (avg_rpm * samples + excluded.avg_rpm * excluded.samples) / (samples + excluded.samples),
          max_rpm = MAX(max_rpm, excluded.max_rpm),
          min_rpm = MIN(min_rpm, excluded.min_rpm),
          avg_power = (avg_power * samples + excluded.avg_power * excluded.samples) / (samples + excluded.samples),
          max_power = MAX(max_power, excluded.max_power),
          min_power = MIN(min_power, excluded.min_power),
          alerts_count = alerts_count + excluded.alerts_count,
          commands_count = commands_count + excluded.commands_count`
      ).bind(
        this.tenantId,
        data.machine_id,
        a.hour_bucket,
        a.samples || 1,
        a.avg_temp ?? null,
        a.max_temp ?? null,
        a.min_temp ?? null,
        a.avg_rpm ?? null,
        a.max_rpm ?? null,
        a.min_rpm ?? null,
        a.avg_power ?? null,
        a.max_power ?? null,
        a.min_power ?? null,
        a.status_summary ?? null,
        a.alerts_count ?? 0,
        a.commands_count ?? 0
      ).run();
    } else {
      return Response.json({ ok: false, error: "Raw ingest disabled. Gateway must send aggregates." }, { status: 400 });
    }
    await logAudit(this.env, {
      tenant_id: this.tenantId,
      machine_id: data.machine_id,
      input: data,
      actions
    });
    this.state.waitUntil(this.broadcast({
      type: "telemetry",
      tenant_id: this.tenantId,
      machine_id: data.machine_id,
      data,
      actions,
      ts: Math.floor(Date.now() / 1e3)
    }));
    return Response.json({ ok: true, actions });
  }
  compileRules(dbRules) {
    const ops = {
      gt: /* @__PURE__ */ __name((a, b) => a > b, "gt"),
      gte: /* @__PURE__ */ __name((a, b) => a >= b, "gte"),
      lt: /* @__PURE__ */ __name((a, b) => a < b, "lt"),
      lte: /* @__PURE__ */ __name((a, b) => a <= b, "lte"),
      eq: /* @__PURE__ */ __name((a, b) => a === b, "eq"),
      neq: /* @__PURE__ */ __name((a, b) => a !== b, "neq")
    };
    return dbRules.map((r) => ({
      id: r.id,
      name: r.name,
      enabled: true,
      when: /* @__PURE__ */ __name((d) => {
        const v = d[r.metric];
        if (v === void 0 || v === null) return false;
        return ops[r.operator](Number(v), Number(r.threshold));
      }, "when"),
      then: /* @__PURE__ */ __name((ctx, d) => {
        if (r.action === "alert") ctx.alert(`[${r.name}] ${r.metric}=${d[r.metric]}`, r.severity || "warning");
        else if (r.action === "command") ctx.command("set", r.action_value, r.id);
        else if (r.action === "clear") ctx.clearAlert();
      }, "then")
    }));
  }
  makeContext(machineId) {
    const self = this;
    return {
      alert: /* @__PURE__ */ __name((message, severity = "info") => self.emitAlert(machineId, message, severity), "alert"),
      command: /* @__PURE__ */ __name((action, value, ruleId) => self.emitCommand(machineId, action, value, ruleId), "command"),
      clearAlert: /* @__PURE__ */ __name(() => self.clearAlerts(machineId), "clearAlert")
    };
  }
  async emitAlert(machineId, message, severity) {
    await this.env.DB.prepare(
      "INSERT INTO alerts (tenant_id, machine_id, rule_id, severity, message) VALUES (?, ?, ?, ?, ?)"
    ).bind(this.tenantId, machineId, "engine", severity, message).run();
  }
  async emitCommand(machineId, action, value, ruleId) {
    const allowed = await checkRateLimit2(this.env, this.tenantId, machineId);
    if (!allowed) return { skipped: "rate_limited" };
    await this.env.DB.prepare(
      "INSERT INTO commands (tenant_id, machine_id, action, value, reason, rule_id) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(
      this.tenantId,
      machineId,
      action,
      value ?? null,
      `rule:${ruleId ?? "manual"}`,
      ruleId ?? null
    ).run();
    return { ok: true, action, value };
  }
  async clearAlerts(machineId) {
    await this.env.DB.prepare(
      "UPDATE alerts SET resolved = 1 WHERE tenant_id = ? AND machine_id = ? AND resolved = 0"
    ).bind(this.tenantId, machineId).run();
  }
  async status() {
    const [alerts, commands, machines] = await Promise.all([
      this.env.DB.prepare(
        "SELECT severity, COUNT(*) as n FROM alerts WHERE tenant_id = ? AND resolved = 0 GROUP BY severity"
      ).bind(this.tenantId).all(),
      this.env.DB.prepare(
        "SELECT COUNT(*) as n FROM commands WHERE tenant_id = ? AND ts > unixepoch() - 86400"
      ).bind(this.tenantId).first(),
      this.env.DB.prepare(
        "SELECT COUNT(DISTINCT machine_id) as n FROM telemetry_agg WHERE tenant_id = ?"
      ).bind(this.tenantId).first()
    ]);
    return Response.json({
      tenant: this.tenantId,
      alerts: alerts.results || [],
      commands_24h: commands?.n ?? 0,
      machines: machines?.n ?? 0
    });
  }
  async report() {
    return Response.json({ ok: true, tenant: this.tenantId });
  }
};

// src/index.js
var html = /* @__PURE__ */ __name((body) => new Response(body, { headers: { "Content-Type": "text/html;charset=utf-8" } }), "html");
var index_default = {
  async fetch(request, env2, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, X-Tenant-ID, X-API-Key, X-CSRF-Token"
        }
      });
    }
    if (path === "/api/bot/public" && request.method === "POST") return handlePublicBotChat(request, env2);
    if (path === "/health") return handleHealth();
    if (path === "/" || path === "") return html(LANDING_HTML);
    if (path === "/signup") return html(SIGNUP_HTML);
    if (path === "/login") return html(LOGIN_HTML);
    if (path === "/verify") return html(VERIFY_HTML);
    if (path === "/accept") return html(ACCEPT_HTML);
    if (path === "/api/stripe/webhook" && request.method === "POST") return handleStripeWebhook(request, env2);
    if (path === "/api/auth/signup" && request.method === "POST") return handleSignup(request, env2);
    if (path === "/api/auth/login" && request.method === "POST") return handleLogin(request, env2);
    if (path === "/api/auth/logout" && request.method === "POST") return handleLogout(request, env2);
    if (path === "/api/auth/verify" && request.method === "GET") return handleVerify(request, env2);
    if (path === "/api/auth/accept" && request.method === "POST") return handleInviteAccept(request, env2);
    if (path.startsWith("/api/ingest")) {
      const apiKey = request.headers.get("X-API-Key");
      const keyInfo = await verifyApiKey(env2, apiKey, "ingest:write");
      if (!keyInfo) return Response.json({ error: "Invalid API key" }, { status: 401 });
      return await handleIngest(request, env2, keyInfo.tenantId);
    }
    const auth = await requireAuth(env2, request);
    if (auth.error) {
      if (path === "/dashboard" || path === "/bot" || path === "/onboarding") {
        return Response.redirect(new URL("/login", request.url).toString(), 302);
      }
      return securityHeaders(auth.error);
    }
    const session = auth.session;
    const csrf = await requireCSRF(env2, request, session);
    if (csrf.error) return securityHeaders(csrf.error);
    if (path === "/api/auth/me" && request.method === "GET") {
      return securityHeaders(await handleMe(request, env2, session));
    }
    if (path === "/dashboard") {
      const t = await env2.DB.prepare("SELECT onboarded, factory_name FROM tenants WHERE id = ?").bind(session.tenantId).first();
      if (!t || !t.factory_name || t.onboarded === 0) {
        return Response.redirect(new URL("/onboarding", request.url).toString(), 302);
      }
      return html(DASHBOARD_HTML);
    }
    if (path === "/bot") return html(BOT_HTML);
    if (path === "/api/machines" && request.method === "GET") {
      return securityHeaders(await handleMachinesList(request, env2, session));
    }
    if (path === "/api/machines" && request.method === "POST") {
      return securityHeaders(await handleMachineCreate(request, env2, session));
    }
    if (path.startsWith("/api/machines/") && request.method === "DELETE") {
      const id = path.slice("/api/machines/".length);
      return securityHeaders(await handleMachineDelete(request, env2, session, id));
    }
    if (path === "/api/keys" && request.method === "GET") {
      return securityHeaders(await handleApiKeyList(request, env2, session));
    }
    if (path === "/api/keys" && request.method === "POST") {
      return securityHeaders(await handleApiKeyCreate(request, env2, session));
    }
    if (path.startsWith("/api/keys/") && request.method === "DELETE") {
      const id = path.slice("/api/keys/".length);
      return securityHeaders(await handleApiKeyRevoke(request, env2, session, id));
    }
    if (path === "/onboarding") return html(ONBOARDING_HTML);
    if (path === "/api/tenants/me") {
      return securityHeaders(await handleTenantMe(request, env2, session));
    }
    if (path === "/api/rules" && request.method === "GET") {
      return securityHeaders(await handleRulesList(request, env2, session));
    }
    if (path === "/api/rules" && request.method === "POST") {
      return securityHeaders(await handleRuleCreate(request, env2, session));
    }
    if (path.startsWith("/api/rules/") && request.method === "PATCH") {
      const id = path.slice("/api/rules/".length);
      return securityHeaders(await handleRuleUpdate(request, env2, session, id));
    }
    if (path.startsWith("/api/rules/") && request.method === "DELETE") {
      const id = path.slice("/api/rules/".length);
      return securityHeaders(await handleRuleDelete(request, env2, session, id));
    }
    if (path === "/api/ws" && request.headers.get("Upgrade") === "websocket") {
      const stub = env2.TENANT.get(env2.TENANT.idFromName(session.tenantId));
      return stub.fetch(request);
    }
    if (path === "/api/templates" && request.method === "GET") {
      return securityHeaders(await handleTemplatesList(request, env2));
    }
    if (path.startsWith("/api/templates/") && path.endsWith("/install") && request.method === "POST") {
      const id = path.slice("/api/templates/".length, -"/install".length);
      return securityHeaders(await handleTemplateInstall(request, env2, session, id));
    }
    if (path === "/api/billing/plans" && request.method === "GET") {
      return securityHeaders(await handlePlans(request, env2, session));
    }
    if (path === "/api/billing/current" && request.method === "GET") {
      return securityHeaders(await handleCurrentPlan(request, env2, session));
    }
    if (path === "/api/billing/select" && request.method === "POST") {
      return securityHeaders(await handleSelectPlan(request, env2, session));
    }
    if (path === "/api/billing/checkout" && request.method === "POST") {
      return securityHeaders(await handleStripeCheckout(request, env2, session));
    }
    if (path === "/api/invites" && request.method === "GET") {
      return securityHeaders(await handleInviteList(request, env2, session));
    }
    if (path === "/api/invites" && request.method === "POST") {
      return securityHeaders(await handleInviteCreate(request, env2, session));
    }
    if (path.startsWith("/api/invites/") && request.method === "DELETE") {
      const id = path.slice("/api/invites/".length);
      return securityHeaders(await handleInviteRevoke(request, env2, session, id));
    }
    if (path === "/api/2fa/status" && request.method === "GET") {
      return securityHeaders(await handle2FAStatus(request, env2, session));
    }
    if (path === "/api/2fa/setup" && request.method === "POST") {
      return securityHeaders(await handle2FASetup(request, env2, session));
    }
    if (path === "/api/2fa/verify" && request.method === "POST") {
      return securityHeaders(await handle2FAVerify(request, env2, session));
    }
    if (path === "/api/2fa/disable" && request.method === "POST") {
      return securityHeaders(await handle2FADisable(request, env2, session));
    }
    if (path === "/api/kill") return handleKillSwitch(request, env2);
    const tenantId = session.tenantId;
    try {
      if (path.startsWith("/api/ingest")) return await handleIngest(request, env2, tenantId);
      if (path.startsWith("/api/commands")) return await handleCommands(request, env2, tenantId);
      if (path.startsWith("/api/dashboard")) return await handleDashboard(request, env2, tenantId);
      if (path.startsWith("/api/bot/chat")) return await handleBotChat(request, env2, tenantId);
    } catch (e) {
      return securityHeaders(Response.json({ error: "Internal error", message: e.message }, { status: 500 }));
    }
    return securityHeaders(Response.json({ error: "Not Found", path }, { status: 404 }));
  }
};
export {
  Tenant,
  index_default as default
};
//# sourceMappingURL=index.js.map
