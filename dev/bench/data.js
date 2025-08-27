window.BENCHMARK_DATA = {
  "lastUpdate": 1756258289087,
  "repoUrl": "https://github.com/matsbror/runwasi",
  "entries": {
    "HTTP Throughput": [
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258099941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20499.2611,
            "unit": "req/s"
          }
        ]
      }
    ],
    "HTTP Latency": [
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258102504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
            "unit": "ms"
          }
        ]
      }
    ],
    "Criterion.rs Benchmark": [
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258112058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14900,
            "unit": "kB",
            "extra": "shim: 11992 kB\nzygote: 2908 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66080,
            "unit": "kB",
            "extra": "shim: 53516 kB\nzygote: 12564 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18244,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3396 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19984,
            "unit": "kB",
            "extra": "shim: 16500 kB\nzygote: 3484 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "93753c7ec8b81aae0620ca77e2d1f22d0b905693",
          "message": "chore(deps): bump lycheeverse/lychee-action from 2.4.1 to 2.5.0 (#1028)\n\nBumps [lycheeverse/lychee-action](https://github.com/lycheeverse/lychee-action) from 2.4.1 to 2.5.0.\n- [Release notes](https://github.com/lycheeverse/lychee-action/releases)\n- [Commits](https://github.com/lycheeverse/lychee-action/compare/82202e5e9c2f4ef1a55a3d02563e1cb6041e5332...5c4ee84814c983aa7164eaee476f014e53ff3963)\n\n---\nupdated-dependencies:\n- dependency-name: lycheeverse/lychee-action\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T17:40:04Z",
          "url": "https://github.com/matsbror/runwasi/commit/93753c7ec8b81aae0620ca77e2d1f22d0b905693"
        },
        "date": 1756258288407,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141540312,
            "range": "± 2974906",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 83400652,
            "range": "± 1724917",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114013488,
            "range": "± 1561261",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126875725,
            "range": "± 1927347",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 138302354,
            "range": "± 8597447",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 142343139,
            "range": "± 2221366",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 90502416,
            "range": "± 3189149",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 91437745,
            "range": "± 2402982",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}